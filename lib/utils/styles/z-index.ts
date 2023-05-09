import type {ViewStyle} from "react-native";

export const zIndex = {
    base: {
        zIndex: 0,
    } as ViewStyle,
    baseOverlay: {
        zIndex: 5,
    } as ViewStyle,
    navbar: {
        zIndex: 10,
    } as ViewStyle,
    navbarOverlay: {
        zIndex: 15,
    } as ViewStyle,
    modal: {
        zIndex: 20,
    } as ViewStyle,
    modalOverlay: {
        zIndex: 25,
    } as ViewStyle,
};
