import { EntityTypesService } from '../services/EntityTypes.service';
import { CreateEntityTypeDto } from '../dto/create-entity-type.dto';
import { UpdateEntityTypeDto } from '../dto/update-entity-type.dto';
import { EntityType } from '../entities/EntityType.entity';
import { EntityItem } from '../entities/EntityItem.entity';
import { EntitySection } from '../entities/EntitySection.entity';
export declare class EntityTypesController {
    private readonly entityTypesService;
    constructor(entityTypesService: EntityTypesService);
    create(createEntityDto: CreateEntityTypeDto, req: any): Promise<any>;
    findAll(): Promise<EntityType[]>;
    findById(id: string): Promise<EntityType>;
    update(id: string, updateEntityDto: UpdateEntityTypeDto): Promise<any>;
    remove(id: string, req: any): Promise<any>;
    restore(id: string): Promise<any>;
    findEntityTypeSections(id: string): Promise<EntityType>;
    findEntityTypeElements(id: string, name: string, limit: number, page: number, sortBy: string, sortDirection: 'ASC' | 'DESC'): Promise<EntityItem[]>;
    tree(id: number): Promise<EntitySection[]>;
}
