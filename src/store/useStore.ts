import { create } from "zustand";
import { IAssessmentResult } from "../../utils/types";

interface IStore {
  galleryImage: string | undefined | null;
  setGalleryImage: (image: string | undefined | null) => void;
  cameraImage: string | undefined | null;
  setCameraImage: (image: string | undefined | null) => void;
  assessmentResults: IAssessmentResult | null;
  setAssessmentResults: (assessmentResults: IAssessmentResult | null) => void;
}

const useStore = create<IStore>((set) => ({
  galleryImage: undefined,
  setGalleryImage: (image: string | undefined | null) =>
    set({ galleryImage: image }),
  cameraImage: undefined,
  setCameraImage: (image: string | undefined | null) =>
    set({ cameraImage: image }),
  assessmentResults: null,
  setAssessmentResults: (assessmentResults: IAssessmentResult | null) =>
    set({ assessmentResults: assessmentResults }),
}));

export default useStore;
