import { CreateEntityItemDto } from '../dto/create-entity-item.dto';
import { UpdateEntityItemDto } from '../dto/update-entity-item.dto';
export declare class EntityItemsService {
    create(createEntityDto: CreateEntityItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCatalogDto: UpdateEntityItemDto): string;
    remove(id: number): string;
}
