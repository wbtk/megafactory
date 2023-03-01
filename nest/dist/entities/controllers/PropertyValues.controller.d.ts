import { PropertyValuesService } from '../services/PropertyValues.service';
import { CreatePropertyValueDto } from '../dto/create-property-value.dto';
import { UpdatePropertyValueDto } from '../dto/update-property-value.dto';
import { PropertyValue } from '../entities/PropertyValue.entity';
export declare class PropertyValuesController {
    private readonly propertyValuesService;
    constructor(propertyValuesService: PropertyValuesService);
    create(createPropertyValueDto: CreatePropertyValueDto, req: any): Promise<any>;
    findAll(): Promise<PropertyValue[]>;
    findOne(id: string): Promise<PropertyValue>;
    findValuesByPropertyId(id: string): Promise<PropertyValue[]>;
    update(id: string, updatePropertyValueDto: UpdatePropertyValueDto, req: any): Promise<any>;
    remove(id: string, req: any): Promise<any>;
    restore(id: string): Promise<any>;
}
