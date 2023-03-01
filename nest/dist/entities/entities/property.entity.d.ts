import { Model } from "sequelize-typescript";
import { PropertyGroup } from "./PropertyGroup.entity";
import { User } from "src/users/entities/users.entity";
import { PropertyValue } from "./PropertyValue.entity";
import { EntityType } from "./EntityType.entity";
export declare enum PropertyDataTypes {
    integer = "\u0427\u0438\u0441\u043B\u043E",
    text = "\u0422\u0435\u043A\u0441\u0442",
    json = "Json",
    relation = "\u0421\u0432\u044F\u0437\u044C",
    options = "\u041E\u043F\u0446\u0438\u0438"
}
export declare enum PropertyFormType {
    string = "\u0421\u0442\u0440\u043E\u043A\u0430",
    text = "\u0422\u0435\u043A\u0441\u0442",
    integer = "\u0427\u0438\u0441\u043B\u043E",
    price = "\u0426\u0435\u043D\u0430",
    image = "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
    dropdown = "\u0412\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",
    json = "Json",
    checkbox = "\u0427\u0435\u043A\u0431\u043E\u043A\u0441",
    radio = "\u0420\u0430\u0434\u0438\u043E"
}
export declare class Property extends Model {
    id: number;
    name: string;
    description: string;
    sort: number;
    dataType: PropertyDataTypes;
    formType: PropertyFormType;
    propertyGroupId: number;
    options: JSON;
    json: JSON;
    active: boolean;
    required: boolean;
    visible: boolean;
    searchable: boolean;
    sortable: boolean;
    multiple: boolean;
    relationTypeId: number;
    creatorId: number;
    destroyerId: number;
    deletedAt: Date;
    group: PropertyGroup;
    values: PropertyValue[];
    relation: EntityType;
    creator: User;
    destroyer: User;
}
