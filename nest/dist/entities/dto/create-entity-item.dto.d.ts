import { EntitySection } from "../entities/EntitySection.entity";
export declare class CreateEntityItemDto {
    readonly name: string;
    readonly sort: number;
    readonly parentEntityTypeId: number;
    readonly entitySectionIds: EntitySection[];
}
