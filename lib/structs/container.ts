import {v4 as uuid} from "uuid";

export interface Container {
    readonly id: string;
    name: string;
    createdAt: Date;
    groupId: string;
    isFrozen: boolean;
    data: Set<string>;
    metadata: [key: string, value: string][];
}

export interface ContainerDto {
    name: string;
    groupId: string;
    isFrozen: boolean;
}

export const createContainer = (dto: ContainerDto): Container => ({
    id: uuid(),
    createdAt: new Date(),
    data: new Set(),
    metadata: [],
    ...dto,
});
