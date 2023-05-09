import type {ColorValue, ViewStyle} from "react-native";
import {BrandColor} from "../../structs/brand-color";

export const borderBottom: ViewStyle = {
    borderBottomColor: BrandColor.MUTED_LIGHT,
    borderBottomWidth: 0.5,
};

export const debugBorder = (color: ColorValue): ViewStyle => ({
    borderColor: color,
    borderWidth: 1,
});
