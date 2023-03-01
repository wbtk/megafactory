import { Model } from "sequelize-typescript";
export declare class EntityType extends Model {
    id: number;
    name: string;
    parentEntityTypeId: number;
    sort: number;
    properties: JSON;
    deletedAt: Date;
}
