import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../assets/styles/global";
import { Colors } from "../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
const Onboarding = () => {
  return (
    <>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.boldFont, styles.name]}>
          <Text style={styles.iris}>Iris</Text>
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
        <View style={styles.btnArrowContainer}>
          <Pressable style={styles.button}>
            <Text style={[globalStyles.semiBoldFont, styles.buttonText]}>
              Scan Plants
            </Text>
            <AntDesign name="scan1" size={18} color="white" />
          </Pressable>
          {/* <View style={styles.iconContainer}>
            <AntDesign name="arrowright" size={18} color="white" />
          </View> */}
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
  btnArrowContainer: {
    marginTop: 120,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    textAlign: "center",
    color: Colors.white,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: Colors.text,
    borderRadius: 15,
    borderTopLeftRadius: 0,
  },
});
