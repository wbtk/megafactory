import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { AddPropertyGroupToEntityTypeDto } from "../dto/add-property-group-to-entity-type.dto";
import { CreatePropertyGroupDto } from "../dto/create-property-group.dto";
import { UpdatePropertyGroupDto } from "../dto/update-property-group.dto";
import { EntityItem } from "../entities/EntityItem.entity";
import { EntitySection } from "../entities/EntitySection.entity";
import { EntityType } from "../entities/EntityType.entity";
import { Property } from "../entities/Property.entity";
import { PropertyGroup } from "../entities/PropertyGroup.entity";

@Injectable()
export class PropertyGroupsService {
  constructor(
    @InjectModel(PropertyGroup)
    private propertyGroupRepository: typeof PropertyGroup,
    @InjectModel(EntityType)
    private entityTypeRepository: typeof EntityType,
    @InjectModel(EntitySection)
    private entitySectionRepository: typeof EntitySection,
    @InjectModel(EntityItem)
    private entityItemRepository: typeof EntityItem,
    private sequelize: Sequelize
  ) {}

  async create(createPropertyGroupDto: CreatePropertyGroupDto, userId: number) {
    try{
      const propertyGroup = await this.propertyGroupRepository.create({
        ...createPropertyGroupDto,
        creatorId: userId
      });
      if ( createPropertyGroupDto.entityTypes ) {
        createPropertyGroupDto.entityTypes.forEach(entityType => {
          this.addPropertyGroupToEntityType(
            <AddPropertyGroupToEntityTypeDto>{
              propertyGroupId: propertyGroup.id,
              entityTypeId: entityType['id']
            }
            );
        });
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  findAll(paranoid: boolean = true) {
    return this.propertyGroupRepository.findAll({paranoid: paranoid});
  }

  async findAllByEntityType(entityTypeId: number, paranoid: boolean = true) {
    const entityType = await this.entityTypeRepository.findByPk(
      entityTypeId, 
      {
        include: [
          {
            model: PropertyGroup,
            attributes: ['id', 'name'],
            paranoid
          }
        ],
      },
      );
    return entityType.propertyGroups;
  }

  async findAllByEntitySection(entitySectionId: number, paranoid: boolean = true) {
    const entitySection = await this.entitySectionRepository.findByPk(
      entitySectionId, 
      {
        include: [
          {
            model: PropertyGroup,
            attributes: ['id', 'name'],
            paranoid
          }
        ],
      },
      );
    return entitySection.propertyGroups;
  }

  async findAllByEntityItem(entityItemId: number, paranoid: boolean = true) {
    const entityItem = await this.entityItemRepository.findByPk(
      entityItemId, 
      {
        include: [
          {
            model: PropertyGroup,
            attributes: ['id', 'name'],
            paranoid
          }
        ],
      },
      );
    return entityItem.propertyGroups;
  }

  findAllWithTrashed() {
    return this.findAll(false);
  }

  async findById(id: number, paranoid: boolean = true) {
    const propertyGroup = await this.propertyGroupRepository.findByPk(id, {paranoid: paranoid});
    if (!propertyGroup) {
      throw new HttpException('Группа свойств не найдена', HttpStatus.NOT_FOUND);
    }
    return propertyGroup;
  }

  async update(id: number, updatePropertyGroupDto: UpdatePropertyGroupDto) {
    try {
      const propertyGroup = await this.findById(id);
      return await propertyGroup.update(updatePropertyGroupDto);
    } catch(err) {
      console.log(err);
      return err
    }
  }

  async remove(id: number, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        
        const propertyGroup = await this.propertyGroupRepository.findByPk(id, {
          include: [
            {
              model: Property,
              attributes: ['id']
            }
          ],
        });

        if ( propertyGroup.properties.length ) {
          throw new HttpException('Группа имеет свойства', HttpStatus.BAD_REQUEST);
        }

        await propertyGroup.update({destroyerId: userId}, transactionHost);
        await propertyGroup.destroy(transactionHost);
        return { code: 200, message: 'Группа свойств удалена' };
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
        const propertyGroup = await this.findById(id, false)
        if ( !propertyGroup.deletedAt ) {
          throw new HttpException('Группа свойств не удалена', HttpStatus.BAD_REQUEST);
        }
        await propertyGroup.update({destroyerId: null}, transactionHost);
        await propertyGroup.restore(transactionHost);
        return { code: 200, message: 'Группа свойств восстановлена' };
      })
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async addPropertyGroupToEntityType(dto: AddPropertyGroupToEntityTypeDto) {
    const entityType = await this.entityTypeRepository.findByPk(dto.entityTypeId, {attributes: ['id']});
    const propertyGroup = await this.propertyGroupRepository.findByPk(dto.propertyGroupId, {attributes: ['id']});
    if (entityType && propertyGroup) {
        await entityType.$add('propertyGroups', propertyGroup.id);
        return { code: 200, message: 'Группа полей добавлена справочнику' };
    }
    throw new HttpException('Данные не верны', HttpStatus.NOT_FOUND);
  }

  async removeRole(dto: AddPropertyGroupToEntityTypeDto) {
      const entityType = await this.entityTypeRepository.findByPk(dto.entityTypeId, {attributes: ['id']});
      const propertyGroup = await this.propertyGroupRepository.findByPk(dto.propertyGroupId, {attributes: ['id']});
      if (entityType && propertyGroup) {
          await entityType.$remove('propertyGroups', propertyGroup.id);
          return { code: 200, message: 'Группа полей удалена у справочника' };
      }
      throw new HttpException('Данные не верны', HttpStatus.NOT_FOUND);
  }


}