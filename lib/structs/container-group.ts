import type {Container} from "./container";
import type {ContainerGroupColor} from "./container-group-color";

import {v4 as uuid} from "uuid";

export interface ContainerGroup {
    readonly id: string;

    name: string;
    matchExpression: RegExp;
    color: ContainerGroupColor;
    tag: string;
    dataJoinSeparator: string;

    /**
     * The largest amount of data elements a single scannable code should hold.
     */
    maxChunkSize: number;

    containers: Record<string, Container>;
}

export interface ContainerGroupDto {
    name: string;
    matchExpression: RegExp;
    color: ContainerGroupColor;
    tag: string;
    dataJoinSeparator: string;
    maxChunkSize: number;
}

export const createContainerGroup = (dto: ContainerGroupDto): ContainerGroup => ({
    id: uuid(),
    containers: {},
    ...dto,
});
