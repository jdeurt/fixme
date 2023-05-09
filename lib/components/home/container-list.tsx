import type {ViewStyle} from "react-native";
import {Text} from "react-native";
import type {ContainerGroup} from "../../structs/container-group";
import {HStack, Spacer, VStack} from "../stack";
import {Bubble} from "../bubble";
import {paddingBottom, paddingLeft, paddingX, paddingY} from "../../utils/styles/spacing";
import {h2} from "../../utils/styles/text";
import {fullWidth} from "../../utils/styles/sizing";
import {borderBottom} from "../../utils/styles/border";
import {ChevronRight, Circle} from "react-native-feather";
import {BrandColor} from "../../structs/brand-color";

interface ContainerListProps {
    group: ContainerGroup;
    style?: ViewStyle;
}

export const ContainerList = ({group, style}: ContainerListProps) => (
    <VStack style={style}>
        <HStack style={{...paddingBottom.xs}}>
            <Circle color={group.color} fill={group.color} height={13} />
            <Text style={{...h2, ...paddingLeft.xxs, color: BrandColor.WHITE}}>{group.name}</Text>
            <Spacer />
        </HStack>

        <Bubble style={fullWidth}>
            <VStack>
                {Object.values(group.containers).map((container, i, {length}) => (
                    <HStack
                        key={container.id}
                        style={{
                            ...paddingY.xs,
                            ...paddingX.sm,
                            ...(i === length - 1 ? undefined : borderBottom),
                        }}>
                        <Text>{container.name}</Text>
                        <Spacer />
                        <ChevronRight color={BrandColor.BLUE} height={20} />
                    </HStack>
                ))}
            </VStack>
        </Bubble>
    </VStack>
);
