import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateEntitySectionDto } from '../dto/create-entity-section.dto';
import { UpdateEntitySectionDto } from '../dto/update-entity-section.dto';
import { EntitySection } from '../entities/EntitySection.entity';
import { EntityTypesService } from './EntityTypes.service';

@Injectable()
export class EntitySectionsService {

  constructor(
    @InjectModel(EntitySection) private entitySectionRepository: typeof EntitySection,
    private readonly entityTypesService: EntityTypesService,
    private sequelize: Sequelize
  ){}

  async create(createEntitySectionDto: CreateEntitySectionDto, userId: number) {
    try{
      return await this.entitySectionRepository.create({
        ...createEntitySectionDto,
        creatorId: userId
      })
    } catch (err) {
      console.log(err)
      return err
    }
  }
  
  async findAll(paranoid: boolean = true) {
    return await this.entitySectionRepository.findAll({paranoid: paranoid});
  }

  async findAllWithTrashed() {
    return await this.findAll(false);
  }

  async findById(id: number, paranoid: boolean = true) {
    const entitySection =  await this.entitySectionRepository.findByPk(id, {paranoid: paranoid})
    if ( !entitySection ) {
      throw new HttpException('Раздел справочника не найден', HttpStatus.NOT_FOUND);
    }
    return entitySection;
  }

  async update(id: number, updateEntitySectionDto: UpdateEntitySectionDto) {
    try {
      const entitySection = await this.findById(id);
      return await entitySection.update(updateEntitySectionDto);
    } catch(err) {
      console.log(err)
      return err
    }
  }

  async remove(id: number, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const entitySection = await this.findById(id)
        await entitySection.update({destroyerId: userId}, transactionHost);
        await entitySection.destroy(transactionHost);
        return { status: 200, message: 'Раздел справочника удален' };
      })
      return result;
    } catch (err) {
      console.log(err)
      return err
    }
  }

  async restore(id: number) {
    try{
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const entitySection = await this.findById(id, false)
        if(!entitySection.deletedAt){
          throw new HttpException('Раздел справочника не удален', HttpStatus.BAD_REQUEST);
        }
        await entitySection.update({destroyerId: null}, transactionHost);
        await entitySection.restore(transactionHost);
        return { status: 200, message: 'Раздел справочника восстановлен' };
      })
      return result;
    } catch (err) {
      console.log(err)
      return err
    }
  }

  async tree(entityTypeId: number, paranoid: boolean = true) {
    return await this.entitySectionRepository.findAll({
      where: {
        entityTypeId: entityTypeId,
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
