import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../assets/styles/global";
import useStore from "../store/useStore";
import AssessmentCard from "../components/AssessmentCard";
const Assessment = () => {
  const cameraImage = useStore((state) => state.cameraImage);
  const galleryImage = useStore((state) => state.galleryImage);
  return (
    <>
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
      <View style={globalStyles.container}>
        <Text style={[globalStyles.semiBoldFont, styles.heading]}>
          Assessment Results
        </Text>
        <AssessmentCard />
      </View>
    </>
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
});
