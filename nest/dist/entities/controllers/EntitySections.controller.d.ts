import { CreateEntitySectionDto } from '../dto/create-entity-section.dto';
import { UpdateEntitySectionDto } from '../dto/update-entity-section.dto';
import { EntitySection } from '../entities/EntitySection.entity';
import { EntitySectionsService } from '../services/EntitySections.service';
export declare class EntitySectionsController {
    private readonly entitySectionsService;
    constructor(entitySectionsService: EntitySectionsService);
    create(createEntitySectionDto: CreateEntitySectionDto, req: any): Promise<any>;
    findAll(): Promise<EntitySection[]>;
    tree(entityTypeId: number): Promise<EntitySection[]>;
    findById(entityTypeId: number): Promise<EntitySection>;
    update(id: string, updateEntityDto: UpdateEntitySectionDto): Promise<any>;
    remove(id: string, req: any): Promise<any>;
    restore(id: string): Promise<any>;
}
