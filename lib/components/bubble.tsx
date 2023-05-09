import type {PropsWithChildren} from "react";
import type {StyleProp, ViewStyle} from "react-native";
import {View} from "react-native";
import {BrandColor} from "../structs/brand-color";

type BubbleProps = PropsWithChildren<{style?: object & StyleProp<ViewStyle>}>;

export const Bubble = ({children, style}: BubbleProps) => (
    <View style={{...bubbleStyle, ...style}}>{children}</View>
);

const bubbleStyle: object & StyleProp<ViewStyle> = {
    backgroundColor: BrandColor.WHITE,
    borderRadius: 10,
};
