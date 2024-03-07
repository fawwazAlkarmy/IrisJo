import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../assets/styles/global";
import { AntDesign } from "@expo/vector-icons";
const AssessmentCard = () => {
  return (
    <View style={styles.card}>
      {/* line */}
      <View style={styles.line} />
      {/* icon */}
      <View style={styles.icon}>
        <AntDesign name="exclamation" size={18} color="white" />
      </View>
      {/* title */}
      <Text style={[globalStyles.regularFont, styles.title]}>
        finished flowering period
      </Text>
    </View>
  );
};
export default AssessmentCard;
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  line: {
    borderWidth: 2,
    borderColor: "#F7AC19",
    height: "100%",
  },
  icon: {
    backgroundColor: "#F7AC19",
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    maxWidth: "80%",
  },
});
