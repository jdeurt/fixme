import type {StateCreator} from "zustand";
import {produce} from "immer";
import type {ContainerGroup, ContainerGroupDto} from "../structs/container-group";
import {createContainerGroup} from "../structs/container-group";
import type {ContainerDto} from "../structs/container";
import {createContainer} from "../structs/container";

export interface ContainerState {
    activeContainerId: string | undefined;
    containerGroups: Record<string, ContainerGroup>;
    containerToGroupMap: Record<string, string | undefined>;

    createGroup: (dto: ContainerGroupDto) => void;
    modifyGroup: (id: string, dto: Partial<ContainerGroupDto>) => void;
    deleteGroup: (id: string) => void;

    createContainer: (dto: ContainerDto) => void;
    modifyContainer: (id: string, dto: Partial<Omit<ContainerDto, "groupId">>) => void;
    deleteContainer: (id: string) => void;
    insertInContainer: (id: string, data: string) => void;
    removeFromContainer: (id: string, data: string) => void;
}

export const createContainerStoreSlice: StateCreator<ContainerState> = (set) => ({
    activeContainerId: undefined,
    containerGroups: {},
    containerToGroupMap: {},

    createGroup: (dto) =>
        set(
            produce<(draft: ContainerState) => void>((draft) => {
                const candidate = createContainerGroup(dto);

                draft.containerGroups[candidate.id] = candidate;
            })
        ),

    modifyGroup: (id, dto) =>
        set(
            produce<(draft: ContainerState) => void>((draft) => {
                draft.containerGroups[id] = {...draft.containerGroups[id], ...dto};
            })
        ),

    deleteGroup: (id) =>
        set(
            produce<(draft: ContainerState) => void>((draft) => {
                Reflect.deleteProperty(draft.containerGroups, id);
            })
        ),

    createContainer: (dto) =>
        set(
            produce<(draft: ContainerState) => void>((draft) => {
                const candidate = createContainer(dto);

                draft.containerGroups[candidate.groupId].containers[candidate.id] = candidate;
                draft.containerToGroupMap[candidate.id] = candidate.groupId;
            })
        ),

    modifyContainer: (id, dto) =>
        set(
            produce<(draft: ContainerState) => void>((draft) => {
                const groupId = draft.containerToGroupMap[id];

                if (groupId === undefined) {
                    return;
                }

                draft.containerGroups[groupId].containers[id] = {
                    ...draft.containerGroups[groupId].containers[id],
                    ...dto,
                };
            })
        ),

    deleteContainer: (id) =>
        set(
            produce<(draft: ContainerState) => void>((draft) => {
                const groupId = draft.containerToGroupMap[id];

                if (groupId === undefined) {
                    return;
                }

                Reflect.deleteProperty(draft.containerGroups[groupId].containers, id);
                Reflect.deleteProperty(draft.containerToGroupMap, id);
            })
        ),

    insertInContainer: (id, data) =>
        set(
            produce<(draft: ContainerState) => void>((draft) => {
                const groupId = draft.containerToGroupMap[id];

                if (groupId === undefined) {
                    return;
                }

                draft.containerGroups[groupId].containers[id].data.add(data);
            })
        ),

    removeFromContainer: (id, data) =>
        set(
            produce<(draft: ContainerState) => void>((draft) => {
                const groupId = draft.containerToGroupMap[id];

                if (groupId === undefined) {
                    return;
                }

                draft.containerGroups[groupId].containers[id].data.delete(data);
            })
        ),
});
