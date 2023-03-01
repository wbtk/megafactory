import { Model } from "sequelize-typescript";
import { EntitySection } from "./section.entity";
import { EntityType } from "./entitytype.entity";
export declare class EntityItem extends Model {
    id: number;
    name: string;
    sort: number;
    creator: EntityType;
    sections: EntitySection[];
    propertiesValue: JSON;
    deletedAt: Date;
}
