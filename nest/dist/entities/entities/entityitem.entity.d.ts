import { Model } from "sequelize-typescript";
import { EntitySection } from "./EntitySection.entity";
import { EntityType } from "./EntityType.entity";
import { User } from "src/users/entities/users.entity";
import { PropertyGroup } from "./PropertyGroup.entity";
export declare class EntityItem extends Model {
    id: number;
    name: string;
    sort: number;
    entityTypeId: number;
    creatorId: number;
    destroyerId: number;
    deletedAt: Date;
    entityType: EntityType;
    entitySections: EntitySection[];
    propertyGroups: PropertyGroup[];
    creator: User;
    destroyer: User;
}
