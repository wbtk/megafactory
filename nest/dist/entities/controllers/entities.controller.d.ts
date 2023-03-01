import { EntityTypesService } from '../services/entitytypes.service';
import { CreateEntityDto } from '../dto/create-entity.dto';
import { UpdateEntityDto } from '../dto/update-entity.dto';
export declare class EntitiesController {
    private readonly entitiesService;
    constructor(entitiesService: EntityTypesService);
    create(createEntityDto: CreateEntityDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEntityDto: UpdateEntityDto): string;
    remove(id: string): string;
}
