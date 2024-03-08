import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../utils/colors";
import * as FileSystem from "expo-file-system";
import useStore from "../store/useStore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/types";
import useAssessment from "../hooks/useAssessment";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Camera">;
};

const CameraScreen = ({ navigation }: Props) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [isTakingPicture, setIsTakingPicture] = useState(false);

  const cameraImage = useStore((state) => state.cameraImage);
  const setCameraImage = useStore((state) => state.setCameraImage);
  const setGalleryImage = useStore((state) => state.setGalleryImage);
  const { assessPlants, isPending } = useAssessment();

  /*   useEffect(() => {
    // Cleanup function to remove the captured photo when component unmounts
    return () => {
      if (cameraImage) {
        deletePhotoFromDevice(cameraImage);
      }
    };
  }, [cameraImage]); */

  const takePicture = async () => {
    if (cameraRef && !isTakingPicture) {
      try {
        setIsTakingPicture(true);
        const photo = await cameraRef.takePictureAsync({ base64: true });
        if (photo?.base64) {
          setCameraImage(photo.base64); // Store the URI of the captured photo
          setGalleryImage(undefined);
          assessPlants([photo.base64], true);
          if (!isPending) {
            navigation.navigate("Assessment");
          }
        }
      } catch (error) {
        console.error("Failed to take picture:", error);
      } finally {
        setIsTakingPicture(false);
      }
    }
  };

  /*   const deletePhotoFromDevice = async (photoUri: string) => {
    // Delete the photo from the device's file system
    try {
      await FileSystem.deleteAsync(photoUri);
      console.log("Photo deleted:", photoUri);
    } catch (error) {
      console.error("Failed to delete photo:", error);
    }
  }; */

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
      <Camera
        style={styles.camera}
        type={CameraType.back}
        ref={(ref) => setCameraRef(ref)}
      />

      <View style={styles.buttonContainer}>
        <Pressable onPress={takePicture} style={styles.captureButton}>
          <Text style={styles.captureButtonText}>Take Photo</Text>
        </Pressable>
      </View>
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
