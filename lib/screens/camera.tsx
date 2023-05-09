import {ScreenContent} from "../components/screen-content";
import {HStack, Spacer, VStack, ZStack} from "../components/stack";
import {useBoundStore} from "../stores/bound";
import {extract} from "../utils/extract";
import {fullWidth} from "../utils/styles/sizing";
import {BrandColor} from "../structs/brand-color";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Bubble} from "../components/bubble";
import {Spacing, paddingX, paddingY} from "../utils/styles/spacing";
import {zIndex} from "../utils/styles/z-index";

export const CameraScreen = () => {
    const {containerGroups} = useBoundStore(extract(["containerGroups"]));
    const {top, left, right} = useSafeAreaInsets();

    return (
        <ScreenContent ignoreSafeArea screenHasNavbar>
            <VStack
                style={{
                    paddingLeft: left + Spacing.LG,
                    paddingRight: right + Spacing.LG,
                    paddingTop: top + Spacing.MD,
                    ...zIndex.baseOverlay,
                }}>
                <HStack>
                    <Bubble
                        style={{
                            ...paddingX.md,
                            ...paddingY.sm,
                            flexGrow: 1,
                        }}
                    />
                </HStack>
                <Spacer />
            </VStack>
        </ScreenContent>
    );
};
