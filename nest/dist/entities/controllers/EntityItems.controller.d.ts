import { CreateEntityItemDto } from '../dto/create-entity-item.dto';
import { UpdateEntityItemDto } from '../dto/update-entity-item.dto';
import { EntityItem } from '../entities/EntityItem.entity';
import { EntityItemsService } from '../services/EntityItems.service';
export declare class EntityItemsController {
    private readonly entityItemsService;
    constructor(entityItemsService: EntityItemsService);
    create(createEntityItemDto: CreateEntityItemDto, req: any): Promise<any>;
    findAll(): Promise<EntityItem[]>;
    findAllByEntityType(entityTypeId: string, name: string, limit: number, page: number, sortBy: string, sortDirection: 'ASC' | 'DESC'): Promise<EntityItem[]>;
    findById(id: number): Promise<EntityItem>;
    update(id: string, updateEntityDto: UpdateEntityItemDto): Promise<any>;
    remove(id: string, req: any): Promise<any>;
    restore(id: string): Promise<any>;
}
