import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { globalStyles } from "../../assets/styles/global";
import useStore from "../store/useStore";
import AssessmentList from "../components/AssessmentList";
import AssessmentSimilarImagesList from "../components/AssessmentSimilarImagesList";
import { useEffect } from "react";
import { Colors } from "../../utils/colors";
import useAssessment from "../hooks/useAssessment";

const Assessment = () => {
  const cameraImage = useStore((state) => state.cameraImage);
  const galleryImage = useStore((state) => state.galleryImage);
  const assessmentResults = useStore((state) => state.assessmentResults);
  const setAssessmentResults = useStore((state) => state.setAssessmentResults);
  const { isError } = useAssessment();

  useEffect(() => {
    return () => {
      setAssessmentResults(null);
    };
  }, [galleryImage, cameraImage]);
  return (
    <ScrollView>
      <View>
        {galleryImage && (
          <View>
            <Image
              source={{ uri: `data:image/jpeg;base64,${galleryImage}` }}
              style={styles.img}
            />
          </View>
        )}
        {cameraImage && (
          <View>
            <Image
              source={{ uri: `data:image/jpeg;base64,${cameraImage}` }}
              style={styles.img}
            />
          </View>
        )}
        {assessmentResults === null ? (
          <>
            <ActivityIndicator
              style={styles.loading}
              size={"large"}
              color={Colors.primary}
            />
            <Text style={[globalStyles.boldFont, styles.loadingText]}>
              Waiting Results ...
            </Text>
          </>
        ) : (
          <View style={styles.assessmentContainer}>
            <Text style={[globalStyles.semiBoldFont, styles.heading]}>
              Assessment Results
            </Text>
            <AssessmentList />
            <Text style={[globalStyles.semiBoldFont, styles.heading]}>
              Similar Plants
            </Text>
            <AssessmentSimilarImagesList />
          </View>
        )}
      </View>
      {assessmentResults === null && isError && (
        <Text style={[globalStyles.boldFont, styles.loadingText]}>
          The photo you provided isn't related, please provide a related photo
        </Text>
      )}
    </ScrollView>
  );
};
export default Assessment;
const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 250,
    marginTop: 50,
  },
  heading: {
    fontSize: 16,
  },
  assessmentContainer: {
    gap: 10,
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  loading: {
    marginVertical: 40,
  },
  loadingText: {
    textAlign: "center",
  },
});
