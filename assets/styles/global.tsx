import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const globalStyles = StyleSheet.create({
  regularFont: {
    fontFamily: "Regular",
    color: Colors.text,
  },
  boldFont: {
    fontFamily: "Bold",
    color: Colors.text,
  },
  semiBoldFont: {
    fontFamily: "SemiBold",
    color: Colors.text,
  },
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 28,
    backgroundColor: Colors.secondary,
  },
});
