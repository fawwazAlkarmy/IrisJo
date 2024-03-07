import { create } from "zustand";

interface IStore {
  galleryImage: string | undefined | null;
  setGalleryImage: (image: string | undefined | null) => void;
  cameraImage: string | undefined | null;
  setCameraImage: (image: string | undefined | null) => void;
}

const useStore = create<IStore>((set) => ({
  galleryImage: undefined,
  setGalleryImage: (image: string | undefined | null) =>
    set({ galleryImage: image }),
  cameraImage: undefined,
  setCameraImage: (image: string | undefined | null) =>
    set({ cameraImage: image }),
}));

export default useStore;
