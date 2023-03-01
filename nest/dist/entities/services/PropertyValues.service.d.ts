import { Sequelize } from "sequelize-typescript";
import { CreatePropertyValueDto } from "../dto/create-property-value.dto";
import { UpdatePropertyValueDto } from "../dto/update-property-value.dto";
import { PropertyValue } from "../entities/PropertyValue.entity";
import { Property } from "../entities/Property.entity";
import { PropertiesService } from "./Properties.service";
export declare class PropertyValuesService {
    private propertyRepository;
    private readonly propertiesService;
    private propertyValueRepository;
    private sequelize;
    constructor(propertyRepository: typeof Property, propertiesService: PropertiesService, propertyValueRepository: typeof PropertyValue, sequelize: Sequelize);
    create(createPropertyValueDto: CreatePropertyValueDto, userId: number): Promise<any>;
    findAll(): Promise<PropertyValue[]>;
    findById(id: number, paranoid?: boolean): Promise<PropertyValue>;
    findByProperty(propertyId: number): Promise<PropertyValue[]>;
    update(id: number, updatePropertyValueDto: UpdatePropertyValueDto, userId: number): Promise<any>;
    remove(id: number, userId: number): Promise<any>;
    restore(id: number): Promise<any>;
}
