import { Sequelize } from 'sequelize-typescript';
import { CreateEntitySectionDto } from '../dto/create-entity-section.dto';
import { UpdateEntitySectionDto } from '../dto/update-entity-section.dto';
import { EntitySection } from '../entities/EntitySection.entity';
import { EntityTypesService } from './EntityTypes.service';
export declare class EntitySectionsService {
    private entitySectionRepository;
    private readonly entityTypesService;
    private sequelize;
    constructor(entitySectionRepository: typeof EntitySection, entityTypesService: EntityTypesService, sequelize: Sequelize);
    create(createEntitySectionDto: CreateEntitySectionDto, userId: number): Promise<any>;
    findAll(paranoid?: boolean): Promise<EntitySection[]>;
    findAllWithTrashed(): Promise<EntitySection[]>;
    findById(id: number, paranoid?: boolean): Promise<EntitySection>;
    update(id: number, updateEntitySectionDto: UpdateEntitySectionDto): Promise<any>;
    remove(id: number, userId: number): Promise<any>;
    restore(id: number): Promise<any>;
    tree(entityTypeId: number, paranoid?: boolean): Promise<EntitySection[]>;
}
