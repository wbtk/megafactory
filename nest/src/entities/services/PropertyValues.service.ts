import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { CreatePropertyValueDto } from "../dto/create-property-value.dto";
import { UpdatePropertyValueDto } from "../dto/update-property-value.dto";
import { PropertyValue } from "../entities/PropertyValue.entity";
import { Property, PropertyDataTypes } from "../entities/Property.entity";
import { PropertiesService } from "./Properties.service";

@Injectable()
export class PropertyValuesService {
  constructor(
    @InjectModel(Property)
    private propertyRepository: typeof Property,
    private readonly propertiesService: PropertiesService,
    @InjectModel(PropertyValue)
    private propertyValueRepository: typeof PropertyValue,
    private sequelize: Sequelize
  ) {}

  async create(createPropertyValueDto: CreatePropertyValueDto, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };

        const lastSortValue = await this.propertyValueRepository.findOne({
          order: [['sort', 'DESC']],
          attributes: ['sort']
        }).then(value => value ? value.sort : 0);

        const property = await this.propertyRepository.findByPk(
          createPropertyValueDto.propertyId,
          {attributes:['multiple']}
          );

        if (lastSortValue && !property.multiple) {
          throw new HttpException('Свойство уже имеет значение', HttpStatus.BAD_REQUEST);
        }

        return await this.propertyValueRepository.create({
          ...{sort: lastSortValue + 1},
          ...createPropertyValueDto,
          creatorId: userId
        }, transactionHost);
      });

      return result;
      
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findAll() {
    return await this.propertyValueRepository.findAll();
  }

  async findById(id: number, paranoid: boolean = true) {
    const propertyValue = await this.propertyValueRepository.findByPk(id, {paranoid: paranoid});
    if (!propertyValue) {
      throw new HttpException('Значение свойства не найдено', HttpStatus.NOT_FOUND);
    }
    return propertyValue;
  }

  async findByProperty(propertyId: number) {
    const property = await this.propertiesService.findById(propertyId);
    return await this.propertyValueRepository.findAll({
      where: {propertyId: propertyId},
      attributes: ['id', `${property.dataType}`],
      order: property.multiple ? [['sort', 'ASC']] : [['id', 'DESC']],
      limit: property.multiple ? null : 1
    });
  }

  async update(id: number, updatePropertyValueDto: UpdatePropertyValueDto, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const propertyValue = await this.findById(id);
        return await propertyValue.update(updatePropertyValueDto, transactionHost);
      });
      return result;
    } catch(err) {
      console.log(err);
      return err
    }
  }

  async remove(id: number, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const propertyValue = await this.findById(id);
        await propertyValue.update({destroyerId: userId}, transactionHost);
        await propertyValue.destroy(transactionHost);
        return { code: 200, message: 'Значение свойства удалено' };
      });
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
        const propertyValue = await this.findById(id, false);
        if ( !propertyValue.deletedAt ) {
          throw new HttpException('Значение свойства не удалено', HttpStatus.BAD_REQUEST);
        }
        await propertyValue.update({destroyerId: null}, transactionHost);
        await propertyValue.restore(transactionHost);
        return { code: 200, message: 'Значение свойства восстановлено' };
      })
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

}