export const extract =
    <T extends object, U extends keyof T>(props: U[]): ((obj: T) => {[K in U]: T[K]}) =>
    (obj) =>
        Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k as U))) as {
            [K in U]: T[K];
        };
