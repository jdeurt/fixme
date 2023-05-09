import type {PropsWithChildren} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import type {StyleProp, ViewStyle} from "react-native/types";
import {View, StatusBar} from "react-native";

interface ScreenContentProps extends PropsWithChildren {
    screenHasNavbar?: boolean;
    barStyle?: "light-content" | "dark-content";
    ignoreSafeArea?: boolean;
}

export const ScreenContent = ({
    children,
    screenHasNavbar,
    barStyle,
    ignoreSafeArea,
}: ScreenContentProps) => {
    const {
        top: paddingTop,
        bottom: paddingBottom,
        left: paddingLeft,
        right: paddingRight,
    } = useSafeAreaInsets();

    const style: StyleProp<ViewStyle> = {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        ...(ignoreSafeArea ? {} : {paddingTop, paddingLeft, paddingRight}),
        ...(screenHasNavbar ? {} : {paddingBottom}),
    };

    return (
        <>
            <StatusBar barStyle={barStyle ?? "light-content"} />
            <View style={style}>{children}</View>
        </>
    );
};
