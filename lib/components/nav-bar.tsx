import {Home, Camera, Settings} from "react-native-feather";
import {BrandColor} from "../structs/brand-color";
import {Spacing, paddingY} from "../utils/styles/spacing";
import {HStack} from "./stack";
import type {ViewStyle} from "react-native";
import {Bubble} from "./bubble";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Tappable} from "./tappable";
import {boxShadow} from "../utils/styles/shadow";
import {Screen} from "../structs/routing";
import {zIndex} from "../utils/styles/z-index";

interface NavBarProps {
    currentScreen: Screen;
    navigate: (route: string) => void;
    style?: ViewStyle;
}

export const NavBar = ({currentScreen, navigate, style}: NavBarProps) => {
    const {bottom: safeAreaBottom, left: safeAreaLeft, right: safeAreaRight} = useSafeAreaInsets();

    return (
        <HStack style={{...zIndex.navbar, ...style}}>
            <Bubble
                style={{
                    flex: 1,
                    borderRadius: 0,
                    ...boxShadow,
                }}>
                <HStack
                    style={{
                        justifyContent: "space-around",
                        paddingLeft: safeAreaLeft + Spacing.XL,
                        paddingRight: safeAreaRight + Spacing.XL,
                        paddingBottom: safeAreaBottom,
                    }}>
                    <Tappable onPress={() => navigate("Home")} style={navBarButtonStyle}>
                        <Home
                            color={
                                currentScreen === Screen.HOME ? BrandColor.BLUE : BrandColor.MUTED
                            }
                            height={20}
                        />
                    </Tappable>
                    <Tappable onPress={() => navigate("Camera")} style={navBarButtonStyle}>
                        <Camera
                            color={
                                currentScreen === Screen.CAMERA ? BrandColor.BLUE : BrandColor.MUTED
                            }
                            height={20}
                        />
                    </Tappable>
                    <Tappable onPress={() => navigate("Settings")} style={navBarButtonStyle}>
                        <Settings
                            color={
                                currentScreen === Screen.SETTINGS
                                    ? BrandColor.BLUE
                                    : BrandColor.MUTED
                            }
                            height={20}
                        />
                    </Tappable>
                </HStack>
            </Bubble>
        </HStack>
    );
};

const navBarButtonStyle: ViewStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...paddingY.md,
};
