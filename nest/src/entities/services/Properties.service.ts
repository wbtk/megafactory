import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { CreatePropertyDto } from "../dto/create-property.dto";
import { UpdatePropertyDto } from "../dto/update-property.dto";
import { Property } from "../entities/Property.entity";
import { PropertyValue } from "../entities/PropertyValue.entity";
import { PropertyDataTypes } from "../entities/Property.entity"

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property)
    private propertyRepository: typeof Property,
    private sequelize: Sequelize
  ) {}

  async create(createPropertyDto: CreatePropertyDto, userId: number) {
    try{
      return await this.propertyRepository.create({
        ...createPropertyDto,
        creatorId: userId
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  findAllByGroup(groupId: number, paranoid: boolean = true) {
    return this.propertyRepository.findAll({
      where:{
        propertyGroupId: groupId
      },
      order: [['sort', 'ASC']],
      paranoid: paranoid
    });
  }

  findAllByGroupWithTrashed(groupId: number) {
    return this.findAllByGroup(groupId, false);
  }

  async findById(id: number, paranoid: boolean = true) {
    let property = await this.propertyRepository.findByPk(id, {
      paranoid: paranoid
    });
    if (!property) {
      throw new HttpException('Свойство не найдено', HttpStatus.NOT_FOUND);
    }
    return property;
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    try {
      const property = await this.findById(id);
      return await property.update(updatePropertyDto);
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  async remove(id: number, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const property = await this.propertyRepository.findByPk(id, {
          include: [
            {
              model: PropertyValue,
              attributes: ['id']
            }
          ],
        });
        if ( property.values.length ) {
          throw new HttpException('Свойство имеет значения', HttpStatus.BAD_REQUEST);
        }
        await property.update({destroyerId: userId}, transactionHost);
        await property.destroy(transactionHost);
        return { code: 200, message: 'Свойство удалено' };
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
        const property = await this.findById(id, false);
        if ( !property.deletedAt ) {
          throw new HttpException('Свойство не удалено', HttpStatus.BAD_REQUEST);
        }
        await property.update({destroyerId: null}, transactionHost);
        await property.restore(transactionHost);
        return { code: 200, message: 'Свойство восстановлено' };
      });
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }


}