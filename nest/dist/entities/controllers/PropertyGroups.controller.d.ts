import { PropertyGroupsService } from '../services/PropertyGroups.service';
import { CreatePropertyGroupDto } from '../dto/create-property-group.dto';
import { UpdatePropertyGroupDto } from '../dto/update-property-group.dto';
import { PropertyGroup } from '../entities/PropertyGroup.entity';
export declare class PropertyGroupsController {
    private readonly propertyGroupsService;
    constructor(propertyGroupsService: PropertyGroupsService);
    create(createPropertyGroupDto: CreatePropertyGroupDto, req: any): Promise<any>;
    findAll(): Promise<PropertyGroup[]>;
    findAllByEntityType(entityTypeId: string): Promise<PropertyGroup[]>;
    findAllByEntitySection(entitySectionId: string): Promise<PropertyGroup[]>;
    findAllByEntityItem(entityItemId: number): Promise<PropertyGroup[]>;
    findOne(id: string): Promise<PropertyGroup>;
    update(id: string, updatePropertyGroupDto: UpdatePropertyGroupDto): Promise<any>;
    remove(id: string, req: any): Promise<any>;
    restore(id: string): Promise<any>;
}
