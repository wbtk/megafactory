import { Model } from "sequelize-typescript";
import { User } from "src/users/entities/users.entity";
import { Property } from "./Property.entity";
import { EntitySection } from "./EntitySection.entity";
import { EntityItem } from "./EntityItem.entity";
import { EntityType } from "./EntityType.entity";
export declare class PropertyValue extends Model {
    id: number;
    sort: number;
    integer: number;
    text: string;
    json: JSON;
    relation: string;
    options: string[];
    propertyId: number;
    entityTypeId: number;
    entitySectionId: number;
    entityItemId: number;
    creatorId: number;
    destroyerId: number;
    deletedAt: Date;
    property: Property;
    entityType: EntityType;
    entitySection: EntitySection;
    entityItem: EntityItem;
    creator: User;
    destroyer: User;
}
