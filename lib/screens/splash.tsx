import {ActivityIndicator} from "react-native";
import {Logo} from "../components/logo";
import {ScreenContent} from "../components/screen-content";
import {Spacer, VStack} from "../components/stack";
import {BrandColor} from "../structs/brand-color";
import {Spacing} from "../utils/styles/spacing";

export const SplashScreen = () => (
    <ScreenContent>
        <VStack gap={Spacing.MD} style={{backgroundColor: BrandColor.SLATE}}>
            <Spacer />
            <Logo color={BrandColor.WHITE} height={100} width={100} />
            <ActivityIndicator color={BrandColor.MUTED_LIGHT} />
            <Spacer />
        </VStack>
    </ScreenContent>
);
