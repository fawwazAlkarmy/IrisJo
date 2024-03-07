import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Colors } from "../../utils/colors";
import * as FileSystem from "expo-file-system";

const CameraScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [capturedPhotoUri, setCapturedPhotoUri] = useState<string | null>(null);
  const [isTakingPicture, setIsTakingPicture] = useState(false);

  useEffect(() => {
    // Cleanup function to remove the captured photo when component unmounts
    return () => {
      if (capturedPhotoUri) {
        deletePhotoFromDevice(capturedPhotoUri);
      }
    };
  }, [capturedPhotoUri]);

  const takePicture = async () => {
    if (cameraRef && !isTakingPicture) {
      try {
        setIsTakingPicture(true);
        const photo = await cameraRef.takePictureAsync();
        console.log("Photo taken:", photo.uri);
        setCapturedPhotoUri(photo.uri); // Store the URI of the captured photo
      } catch (error) {
        console.error("Failed to take picture:", error);
      } finally {
        setIsTakingPicture(false);
      }
    }
  };

  const deletePhotoFromDevice = async (photoUri: string) => {
    // Delete the photo from the device's file system
    try {
      await FileSystem.deleteAsync(photoUri);
      console.log("Photo deleted:", photoUri);
    } catch (error) {
      console.error("Failed to delete photo:", error);
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Pressable onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {capturedPhotoUri ? (
        <View style={styles.previewContainer}>
          <Image
            source={{ uri: capturedPhotoUri }}
            style={styles.previewImage}
          />
        </View>
      ) : (
        <Camera
          style={styles.camera}
          type={CameraType.back}
          ref={(ref) => setCameraRef(ref)}
        />
      )}
      {!capturedPhotoUri && (
        <View style={styles.buttonContainer}>
          <Pressable onPress={takePicture} style={styles.captureButton}>
            <Text style={styles.captureButtonText}>Take Photo</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  previewContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  previewImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  captureButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  captureButtonText: {
    color: Colors.white,
    fontSize: 18,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 13,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
});

export default CameraScreen;
