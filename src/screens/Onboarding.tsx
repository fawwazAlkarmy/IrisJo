import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../assets/styles/global";
import { Colors } from "../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";

const Onboarding = () => {
  const [image, setImage] = useState<string | null>(null);
  //! function to handle image selection from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.boldFont, styles.name]}>
          <Text style={styles.iris}>Iris</Text>
          <Text style={styles.iris}> </Text>
          Jo
        </Text>
        <Text style={[globalStyles.regularFont, styles.subHeading]}>
          Plants Care with AI-Powered Health Assessments
        </Text>
        <View>
          <Image
            style={styles.img}
            source={require("../../assets/images/bg.jpg")}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button}>
            <Text style={[globalStyles.semiBoldFont, styles.buttonText]}>
              Scan Plants
            </Text>
            <AntDesign name="scan1" size={17} color="white" />
          </Pressable>
          <Pressable
            style={[styles.button, styles.secondaryButton]}
            onPress={pickImage}
          >
            <Text
              style={[
                globalStyles.semiBoldFont,
                styles.buttonText,
                styles.secondaryButtonText,
              ]}
            >
              Choose from gallery
            </Text>
            <AntDesign name="camera" size={17} color="black" />
          </Pressable>
        </View>
      </View>
    </>
  );
};
export default Onboarding;
const styles = StyleSheet.create({
  name: {
    fontSize: 20,
  },
  iris: {
    color: Colors.primary,
  },
  subHeading: {
    fontSize: 15,
    marginTop: 15,
    width: 250,
  },
  img: {
    width: 360,
    height: 250,
  },
  buttonsContainer: {
    marginTop: 120,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.text,
  },
  secondaryButtonText: {
    color: Colors.text,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 13,
  },
});
