import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import type {ContainerState} from "./containers";
import {createContainerStoreSlice} from "./containers";
import type {UserState} from "./user";
import {createUserStoreSlice} from "./user";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useBoundStore = create<
    ContainerState & UserState,
    [["zustand/persist", ContainerState & UserState]]
>(
    persist(
        (...a) => ({
            ...createContainerStoreSlice(...a),
            ...createUserStoreSlice(...a),
        }),
        {
            name: "@sycon/cm",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
