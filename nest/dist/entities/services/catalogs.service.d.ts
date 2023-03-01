import { CreateEntityDto } from '../dto/create-entity.dto';
import { UpdateEntityDto } from '../dto/update-catalog.dto';
export declare class EntitiesService {
    create(createEntityDto: CreateEntityDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCatalogDto: UpdateEntityDto): string;
    remove(id: number): string;
}
