import { Sequelize } from 'sequelize-typescript';
import { CreateEntityTypeDto } from '../dto/create-entity-type.dto';
import { UpdateEntityTypeDto } from '../dto/update-entity-type.dto';
import { EntityType } from '../entities/EntityType.entity';
import { EntitySection } from '../entities/EntitySection.entity';
import { EntityItem } from '../entities/EntityItem.entity';
export declare class EntityTypesService {
    private entityTypeRepository;
    private entitySectionRepository;
    private entityItemRepository;
    private sequelize;
    constructor(entityTypeRepository: typeof EntityType, entitySectionRepository: typeof EntitySection, entityItemRepository: typeof EntityItem, sequelize: Sequelize);
    create(createEntityDto: CreateEntityTypeDto, userId: number): Promise<any>;
    findAll(): Promise<EntityType[]>;
    findById(id: number, paranoid?: boolean): Promise<EntityType>;
    findEntityTypeElements(options: {}): Promise<EntityItem[]>;
    update(id: number, updateEntityTypeDto: UpdateEntityTypeDto): Promise<any>;
    remove(id: number, userId: number): Promise<any>;
    restore(id: number): Promise<any>;
    tree(id: number, paranoid?: boolean): Promise<EntitySection[]>;
}
