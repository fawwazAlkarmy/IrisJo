import { StyleSheet, FlatList } from "react-native";
import AssessmentSimilarImage from "./AssessmentSimilarImage";
import useStore from "../store/useStore";

const AssessmentSimilarImagesList = () => {
  const suggestions = useStore(
    (state) => state.assessmentResults?.result?.disease?.suggestions
  );
  const similarImages = suggestions?.flatMap(
    (suggestion) => suggestion.similar_images
  );
  const uniqueImages = Array.from(
    new Set(similarImages?.map((image) => image.id))
  ).map((id) => {
    return similarImages?.find((image) => image.id === id);
  });

  return (
    <FlatList
      data={uniqueImages}
      renderItem={({ item, index }) => (
        <AssessmentSimilarImage item={item} key={index.toString()} />
      )}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{
        paddingBottom: 50,
      }}
    />
  );
};
export default AssessmentSimilarImagesList;
const styles = StyleSheet.create({});
