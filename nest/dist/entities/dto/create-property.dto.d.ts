import { PropertyDataTypes } from "../entities/Property.entity";
import { PropertyFormType } from "../entities/Property.entity";
export declare class CreatePropertyDto {
    readonly name: string;
    readonly description: string;
    readonly sort: number;
    readonly dataType: PropertyDataTypes;
    readonly formType: PropertyFormType;
    readonly relationTypeId: number;
    readonly options: JSON;
    readonly json: JSON;
    readonly propertyGroupId: number;
    readonly active: boolean;
    readonly required: boolean;
    readonly visible: boolean;
    readonly searchable: boolean;
    readonly sortable: boolean;
    readonly multiple: boolean;
}
