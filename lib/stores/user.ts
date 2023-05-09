import type {CameraPermissionStatus} from "react-native-vision-camera";
import type {StateCreator} from "zustand";

export interface UserState {
    cameraPermissionStatus: CameraPermissionStatus;
}

export const createUserStoreSlice: StateCreator<UserState> = () => ({
    cameraPermissionStatus: "not-determined",
});
