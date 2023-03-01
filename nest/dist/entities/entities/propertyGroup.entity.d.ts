import { Model } from "sequelize-typescript";
import { EntityType } from "./EntityType.entity";
import { EntitySection } from "./EntitySection.entity";
import { EntityItem } from "./EntityItem.entity";
import { User } from "src/users/entities/users.entity";
import { Property } from "./Property.entity";
export declare class PropertyGroup extends Model {
    id: number;
    name: string;
    sort: number;
    creatorId: number;
    destroyerId: number;
    deletedAt: Date;
    properties: Property[];
    entityTypes: EntityType[];
    entitySections: EntitySection[];
    entityItems: EntityItem[];
    creator: User;
    destroyer: User;
}
