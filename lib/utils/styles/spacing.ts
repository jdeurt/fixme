import type {ViewStyle} from "react-native";

interface Variants<T> {
    xxs: T;
    xs: T;
    sm: T;
    md: T;
    lg: T;
    xl: T;
}

export const Spacing = {
    XXS: 5,
    XS: 10,
    SM: 15,
    MD: 20,
    LG: 25,
    XL: 30,
};

const constructVariants = <T extends string & keyof ViewStyle>(prop: T) =>
    Object.fromEntries(
        Object.entries(Spacing).map(([k, v]) => [k.toLowerCase(), {[prop]: v}])
    ) as unknown as Variants<Record<T, number>>;

export const paddingLeft = constructVariants("paddingLeft");
export const paddingRight = constructVariants("paddingRight");
export const paddingTop = constructVariants("paddingTop");
export const paddingBottom = constructVariants("paddingBottom");
export const paddingX = constructVariants("paddingHorizontal");
export const paddingY = constructVariants("paddingVertical");
export const padding = constructVariants("padding");

export const marginLeft = constructVariants("marginLeft");
export const marginRight = constructVariants("marginRight");
export const marginTop = constructVariants("marginTop");
export const marginBottom = constructVariants("marginBottom");
export const marginX = constructVariants("marginHorizontal");
export const marginY = constructVariants("marginVertical");
export const margin = constructVariants("margin");
