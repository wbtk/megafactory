import { Sequelize } from "sequelize-typescript";
import { CreatePropertyDto } from "../dto/create-property.dto";
import { UpdatePropertyDto } from "../dto/update-property.dto";
import { Property } from "../entities/Property.entity";
export declare class PropertiesService {
    private propertyRepository;
    private sequelize;
    constructor(propertyRepository: typeof Property, sequelize: Sequelize);
    create(createPropertyDto: CreatePropertyDto, userId: number): Promise<any>;
    findAllByGroup(groupId: number, paranoid?: boolean): Promise<Property[]>;
    findAllByGroupWithTrashed(groupId: number): Promise<Property[]>;
    findById(id: number, paranoid?: boolean): Promise<Property>;
    update(id: number, updatePropertyDto: UpdatePropertyDto): Promise<any>;
    remove(id: number, userId: number): Promise<any>;
    restore(id: number): Promise<any>;
}
