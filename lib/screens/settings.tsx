import {ScreenContent} from "../components/screen-content";
import {Logo} from "../components/logo";
import {HStack, Spacer, VStack} from "../components/stack";
import {Spacing, marginTop, padding, paddingTop, paddingX} from "../utils/styles/spacing";
import {useBoundStore} from "../stores/bound";
import {extract} from "../utils/extract";
import {ContainerList} from "../components/home/container-list";
import {ScrollView, Text} from "react-native";
import {fullWidth} from "../utils/styles/sizing";
import {BrandColor} from "../structs/brand-color";
import {h1} from "../utils/styles/text";
import {Bubble} from "../components/bubble";

export const SettingsScreen = () => {
    const {containerGroups, activeContainerId} = useBoundStore(
        extract(["containerGroups", "activeContainerId"])
    );

    return (
        <ScreenContent screenHasNavbar>
            <HStack gap={Spacing.XS} style={{...padding.md, ...paddingTop.sm}}>
                <Logo color={BrandColor.WHITE} height={35} width={35} />
                <Text style={{...h1, color: BrandColor.WHITE}}>Settings</Text>
                <Spacer />
            </HStack>
            <Bubble
                style={{
                    flexGrow: 1,
                    ...fullWidth,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }}>
                <VStack />
            </Bubble>
        </ScreenContent>
    );
};
