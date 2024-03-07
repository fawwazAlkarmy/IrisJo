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
  centerContainer: {
    flex: 1,
    paddingHorizontal: 28,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 28,
  },
});
