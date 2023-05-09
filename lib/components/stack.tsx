import type {PropsWithChildren} from "react";
import {Children} from "react";
import type {ViewStyle} from "react-native";
import {View} from "react-native";

type StackProps = PropsWithChildren<{
    style?: ViewStyle;
    gap?: number;
}>;

export const Stack = ({children, style, gap}: StackProps) => (
    <View style={{...baseStackStyle, gap, ...style}}>{children}</View>
);

export const VStack = ({children, style, gap}: StackProps) => (
    <View style={{...vStackStyle, gap, ...style}}>{children}</View>
);

export const HStack = ({children, style, gap}: StackProps) => (
    <View style={{...hStackStyle, gap, ...style}}>{children}</View>
);

export const ZStack = ({children, style}: StackProps) => (
    <View
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            ...style,
        }}>
        {Children.map(children, (child) => (
            <View style={{position: "absolute"}}>{child}</View>
        ))}
    </View>
);

export const Spacer = () => <View style={{flexGrow: 1}} />;

const baseStackStyle: ViewStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
const vStackStyle: ViewStyle = {...baseStackStyle, flexDirection: "column"};
const hStackStyle: ViewStyle = {...baseStackStyle, flexDirection: "row"};
