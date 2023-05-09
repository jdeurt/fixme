import {ScreenContent} from "../components/screen-content";
import {Logo} from "../components/logo";
import {HStack, Spacer} from "../components/stack";
import {Spacing, marginTop, padding, paddingTop, paddingX} from "../utils/styles/spacing";
import {useBoundStore} from "../stores/bound";
import {extract} from "../utils/extract";
import {ContainerList} from "../components/home/container-list";
import {ScrollView} from "react-native";
import {fullWidth} from "../utils/styles/sizing";
import {BrandColor} from "../structs/brand-color";
import {Plus} from "react-native-feather";

export const HomeScreen = () => {
    const {containerGroups} = useBoundStore(extract(["containerGroups"]));

    return (
        <ScreenContent screenHasNavbar>
            <HStack gap={Spacing.XS} style={{...padding.md, ...paddingTop.sm}}>
                <Logo color={BrandColor.WHITE} height={35} width={35} />
                <Spacer />
                <HStack gap={Spacing.XXS}>
                    <Plus color={BrandColor.WHITE} />
                </HStack>
            </HStack>
            <ScrollView style={{...paddingX.lg, ...paddingTop.xxs}}>
                {Object.values(containerGroups).map((group) => (
                    <ContainerList
                        group={group}
                        key={group.id}
                        style={{...fullWidth, ...marginTop.md}}
                    />
                ))}
            </ScrollView>
        </ScreenContent>
    );
};
