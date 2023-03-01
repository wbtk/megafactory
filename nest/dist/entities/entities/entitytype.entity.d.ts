import { Model } from "sequelize-typescript";
import { PropertyGroup } from "./PropertyGroup.entity";
import { User } from "src/users/entities/users.entity";
export declare class EntityType extends Model {
    id: number;
    name: string;
    parentEntityTypeId: number;
    sort: number;
    creatorId: number;
    destroyerId: number;
    deletedAt: Date;
    propertyGroups: PropertyGroup[];
    creator: User;
    destroyer: User;
}
