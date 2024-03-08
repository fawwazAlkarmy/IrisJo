import { StyleSheet, Image, View, Text } from "react-native";
import { SimilarImages } from "../../utils/types";

type Props = {
  item: SimilarImages | undefined;
};
const AssessmentSimilarImage = ({ item }: Props) => {
  return (
    <View style={styles.imagesContainer}>
      <Image source={{ uri: item?.url }} style={styles.image} />
    </View>
  );
};
export default AssessmentSimilarImage;
const styles = StyleSheet.create({
  imagesContainer: {
    marginBottom: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
    marginRight: 15,
  },
});
