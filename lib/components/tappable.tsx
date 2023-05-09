import type {PropsWithChildren} from "react";
import type {ViewStyle} from "react-native";
import {View} from "react-native";

interface TappableProps extends PropsWithChildren {
    onPress?: () => void;
    style?: ViewStyle;
}

export const Tappable = ({children, onPress, style}: TappableProps) => {
    return (
        <View onTouchStart={onPress} style={style}>
            {children}
        </View>
    );
};
