import { useMutation } from "@tanstack/react-query";
import client from "../api/client";
import useStore from "../store/useStore";

const useAssessment = () => {
  const setAssessmentResults = useStore((state) => state.setAssessmentResults);
  const { mutate, data, isPending, isError } = useMutation({
    mutationFn: ({
      images,
      similarImages,
    }: {
      images: string[];
      similarImages: boolean;
    }) => client.Plants.assessment(images, similarImages),
    onSuccess: (data) => {
      setAssessmentResults(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const assessPlants = (images: string[], similarImages: boolean) => {
    mutate({ images, similarImages });
  };

  return {
    assessPlants,
    data,
    isPending,
    isError,
  };
};

export default useAssessment;
