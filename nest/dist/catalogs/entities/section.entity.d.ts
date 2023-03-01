import { Model } from "sequelize-typescript";
export declare class CatalogSection extends Model {
    id: number;
    name: string;
    catalogId: number;
    parentId: number;
    sort: number;
    deletedAt: Date;
}
