import { Sequelize } from 'sequelize-typescript';
import { CreateEntityItemDto } from '../dto/create-entity-item.dto';
import { UpdateEntityItemDto } from '../dto/update-entity-item.dto';
import { EntityItem } from '../entities/EntityItem.entity';
export declare class EntityItemsService {
    private entityItemRepository;
    private sequelize;
    constructor(entityItemRepository: typeof EntityItem, sequelize: Sequelize);
    create(createEntityItemDto: CreateEntityItemDto, userId: number): Promise<any>;
    findAll(): Promise<EntityItem[]>;
    findEntityTypeElements(options: {}): Promise<EntityItem[]>;
    findById(id: number, paranoid?: boolean): Promise<EntityItem>;
    update(id: number, updateEntityItemDto: UpdateEntityItemDto): Promise<any>;
    remove(id: number, userId: number): Promise<any>;
    restore(id: number): Promise<any>;
}
