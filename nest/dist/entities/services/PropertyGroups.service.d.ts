import { Sequelize } from "sequelize-typescript";
import { AddPropertyGroupToEntityTypeDto } from "../dto/add-property-group-to-entity-type.dto";
import { CreatePropertyGroupDto } from "../dto/create-property-group.dto";
import { UpdatePropertyGroupDto } from "../dto/update-property-group.dto";
import { EntityItem } from "../entities/EntityItem.entity";
import { EntitySection } from "../entities/EntitySection.entity";
import { EntityType } from "../entities/EntityType.entity";
import { PropertyGroup } from "../entities/PropertyGroup.entity";
export declare class PropertyGroupsService {
    private propertyGroupRepository;
    private entityTypeRepository;
    private entitySectionRepository;
    private entityItemRepository;
    private sequelize;
    constructor(propertyGroupRepository: typeof PropertyGroup, entityTypeRepository: typeof EntityType, entitySectionRepository: typeof EntitySection, entityItemRepository: typeof EntityItem, sequelize: Sequelize);
    create(createPropertyGroupDto: CreatePropertyGroupDto, userId: number): Promise<any>;
    findAll(paranoid?: boolean): Promise<PropertyGroup[]>;
    findAllByEntityType(entityTypeId: number, paranoid?: boolean): Promise<PropertyGroup[]>;
    findAllByEntitySection(entitySectionId: number, paranoid?: boolean): Promise<PropertyGroup[]>;
    findAllByEntityItem(entityItemId: number, paranoid?: boolean): Promise<PropertyGroup[]>;
    findAllWithTrashed(): Promise<PropertyGroup[]>;
    findById(id: number, paranoid?: boolean): Promise<PropertyGroup>;
    update(id: number, updatePropertyGroupDto: UpdatePropertyGroupDto): Promise<any>;
    remove(id: number, userId: number): Promise<any>;
    restore(id: number): Promise<any>;
    addPropertyGroupToEntityType(dto: AddPropertyGroupToEntityTypeDto): Promise<{
        code: number;
        message: string;
    }>;
    removeRole(dto: AddPropertyGroupToEntityTypeDto): Promise<{
        code: number;
        message: string;
    }>;
}
