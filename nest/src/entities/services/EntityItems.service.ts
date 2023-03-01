import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Role } from 'src/users/entities/roles.entity';
import { User } from 'src/users/entities/users.entity';
import { CreateEntityItemDto } from '../dto/create-entity-item.dto';
import { UpdateEntityItemDto } from '../dto/update-entity-item.dto';
import { EntityItem } from '../entities/EntityItem.entity';
import { EntitySection } from '../entities/EntitySection.entity';
import { EntityType } from '../entities/EntityType.entity';

@Injectable()
export class EntityItemsService {

  constructor(
    @InjectModel(EntityItem) private entityItemRepository: typeof EntityItem,
    private sequelize: Sequelize
  ){}

  async create(createEntityItemDto: CreateEntityItemDto, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const entityItem = await this.entityItemRepository.create({
          ...createEntityItemDto,
          creatorId: userId
        }, transactionHost);

        if(createEntityItemDto.entitySectionIds){
          createEntityItemDto.entitySectionIds.forEach( async section => {
            await entityItem.$set('entitySections', [section])
          });
        }

        return entityItem;
      })
      return result
    } catch (err) {
      console.log(err)
      return err
    }
  }
  
  async findAll() {
    return await this.entityItemRepository.findAll({
      include: [
        {
          model: EntityType,
          attributes: ['id', 'name']
        },
        {
          model: EntitySection,
          attributes: ['id', 'name']
        },
        {
          model: User, as: 'creator',
          attributes: ['id', 'lastname', 'firstname', 'patronymic', 'email'],
          include: [{
            model: Role,
            attributes: ['id', 'name']
          }]
        }
      ]
    });
  }

  async findEntityTypeElements(options: {}) {
    return await this.entityItemRepository.findAll({
      ...options,
      include: [
        {
          model: EntityType,
          attributes: ['id', 'name']
        },
        {
          model: EntitySection,
          attributes: ['id', 'name']
        },
        {
          model: User, as: 'creator',
          attributes: ['id', 'lastname', 'firstname', 'patronymic', 'email'],
          include: [{
            model: Role,
            attributes: ['id', 'name']
          }]
        }
      ]
    }); 
  }

  async findById(id: number, paranoid: boolean = true) {
    const entityItem = await this.entityItemRepository.findByPk(id, {
      paranoid: paranoid,
      include: [
        {
          model: EntityType,
          attributes: ['id', 'name']
        },
        {
          model: EntitySection,
          attributes: ['id', 'name']
        },
        {
          model: User, as: 'creator',
          attributes: ['id', 'lastname', 'firstname', 'patronymic', 'email'],
          include: [{
            model: Role,
            attributes: ['id', 'name']
          }]
        }
      ]
    })

    if (!entityItem) {
      throw new HttpException('Элемент справочника не найден', HttpStatus.NOT_FOUND);
    }
    return entityItem;
  }

  async update(id: number, updateEntityItemDto: UpdateEntityItemDto) {
    try {
      const entityItem = await this.findById(id);
      return await entityItem.update(updateEntityItemDto);
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  async remove(id: number, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const entityItem = await this.findById(id);
        await entityItem.update({destroyerId: userId}, transactionHost);
        await entityItem.destroy(transactionHost);
        return { code: 200, message: 'Элемент справочника удален' };
      });
      return result;
    } catch (err) {
      console.log(err)
      return err
    }
  }

  async restore(id: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const entityItem = await this.findById(id, false);
        if ( !entityItem.deletedAt ) {
          throw new HttpException('Элемент справочника не удален', HttpStatus.BAD_REQUEST);
        }
        await entityItem.update({destroyerId: null}, transactionHost);
        await entityItem.restore(transactionHost);
        return { code: 200, message: 'Элемент справочника восстановлен' };
      })
      return result;
    } catch (err) {
      console.log(err)
      return err
    }
  }
  
}