import { CreateEntityDto } from '../dto/create-entity.dto';
import { UpdateEntityDto } from '../dto/update-entity.dto';
export declare class EntityTypesService {
    create(createEntityDto: CreateEntityDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCatalogDto: UpdateEntityDto): string;
    remove(id: number): string;
}
