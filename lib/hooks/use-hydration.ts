import {useEffect, useState} from "react";
import {useBoundStore} from "../stores/bound";

export const useHydration = () => {
    const [boundStoreHydrated, setBoundStoreHydrated] = useState(
        useBoundStore.persist.hasHydrated()
    );

    useEffect(() => {
        const unsubFinishHydration = useBoundStore.persist.onFinishHydration(() =>
            setBoundStoreHydrated(true)
        );

        setBoundStoreHydrated(useBoundStore.persist.hasHydrated());

        return () => {
            unsubFinishHydration();
        };
    }, []);

    return boundStoreHydrated;
};
