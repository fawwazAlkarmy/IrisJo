import { StyleSheet, FlatList } from "react-native";
import useStore from "../store/useStore";
import AssessmentCard from "./AssessmentCard";
const AssessmentList = () => {
  const assessmentResults = useStore((state) => state.assessmentResults);
  let suggestions = assessmentResults?.result?.disease?.suggestions;
  return (
    <FlatList
      data={suggestions}
      renderItem={({ item }) => <AssessmentCard item={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
    />
  );
};
export default AssessmentList;
const styles = StyleSheet.create({});
