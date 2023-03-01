import { Model } from "sequelize-typescript";
import { EntityItem } from "./EntityItem.entity";
import { EntityType } from "./EntityType.entity";
import { User } from "src/users/entities/users.entity";
import { PropertyGroup } from "./PropertyGroup.entity";
export declare class EntitySection extends Model {
    id: number;
    name: string;
    sort: number;
    entityTypeId: number;
    parentId: number;
    creatorId: number;
    destroyerId: number;
    deletedAt: Date;
    entityType: EntityType;
    parent: EntitySection;
    childrens: EntitySection[];
    items: EntityItem[];
    propertyGroups: PropertyGroup[];
    creator: User;
    destroyer: User;
}
