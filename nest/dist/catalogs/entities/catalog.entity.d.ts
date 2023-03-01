import { Model } from "sequelize-typescript";
export declare class Catalog extends Model {
    id: number;
    name: string;
    sort: number;
    properties: JSON;
    deletedAt: Date;
}
