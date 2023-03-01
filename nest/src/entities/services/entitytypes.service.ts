import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateEntityTypeDto } from '../dto/create-entity-type.dto';
import { UpdateEntityTypeDto } from '../dto/update-entity-type.dto';
import { EntityType } from '../entities/EntityType.entity';
import { EntitySection } from '../entities/EntitySection.entity';
import { EntityItem } from '../entities/EntityItem.entity';

@Injectable()
export class EntityTypesService {

  constructor(
    @InjectModel(EntityType) private entityTypeRepository: typeof EntityType,
    @InjectModel(EntitySection) private entitySectionRepository: typeof EntitySection,
    @InjectModel(EntityItem) private entityItemRepository: typeof EntityItem,
    private sequelize: Sequelize
  ){}

  async create(createEntityDto: CreateEntityTypeDto, userId: number) {
    try{
      return await this.entityTypeRepository.create({
        ...createEntityDto,
        creatorId: userId
      })
    } catch (err) {
      console.log(err)
      return err
    }
  }

  async findAll() {
    return await this.entityTypeRepository.findAll();
  }

  async findById(id: number, paranoid: boolean = true) {
    const entityType = await this.entityTypeRepository.findByPk(id, {paranoid: paranoid})
    if ( !entityType ) {
      throw new HttpException('Справочник не найден', HttpStatus.NOT_FOUND);
    }
    return entityType;
  }

  async findEntityTypeElements(options: {}) {
    return await this.entityItemRepository.findAll(options); 
  }

  async update(id: number, updateEntityTypeDto: UpdateEntityTypeDto) {
    try {
      const entityType = await this.findById(id);
      return await entityType.update(updateEntityTypeDto);
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  async remove(id: number, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const entityType = await this.findById(id);
        await entityType.update({destroyerId: userId}, transactionHost);
        await entityType.destroy(transactionHost);
        return { code: 200, message: 'Справочник удален' };
      })
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async restore(id: number) {
    try{
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const entityType = await this.findById(id, false);
        if( !entityType.deletedAt ){
          throw new HttpException('Справочник не удален', HttpStatus.BAD_REQUEST);
        }
        await entityType.update({destroyerId: null}, transactionHost);
        await entityType.restore(transactionHost);
        return { code: 200, message: 'Справочник восстановлен' };
      })
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async tree(id: number, paranoid: boolean = true) {
    return await this.entitySectionRepository.findAll({
      where: {
        entityTypeId: id,
        parentId: null
      },
      include: [
        {
          model: EntitySection,
          as: 'childrens',
          attributes: ['id', 'name', 'sort'],
          separate: true,
          order: [['sort', 'ASC']],
          include: [
            {
              model: EntitySection,
              as: 'childrens',
              attributes: ['id', 'name', 'sort'],
              separate: true,
              order: [['sort', 'ASC']],
              include: [
                {
                  model: EntitySection,
                  as: 'childrens',
                  attributes: ['id', 'name', 'sort'],
                }
              ]
            }
          ]
        }
      ],
      attributes: ['id', 'name', 'sort'],
      order: [
        ['sort', 'ASC']
      ],
      paranoid: paranoid
    });
  }

}
