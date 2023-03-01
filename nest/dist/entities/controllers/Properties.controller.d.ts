import { PropertiesService } from '../services/Properties.service';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { Property } from '../entities/Property.entity';
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
    create(createPropertyDto: CreatePropertyDto, req: any): Promise<any>;
    findAll(groupId: string): Promise<Property[]>;
    findOne(id: string): Promise<Property>;
    update(id: string, updatePropertyDto: UpdatePropertyDto): Promise<any>;
    remove(id: string, req: any): Promise<any>;
    restore(id: string): Promise<any>;
}
