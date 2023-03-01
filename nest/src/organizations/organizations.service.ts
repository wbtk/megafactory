import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {

  constructor(
    @InjectModel(Organization) private organizationRepository: typeof Organization,
    private sequelize: Sequelize
  ){}

  async create(createOrganizationDto: CreateOrganizationDto, userId: number) {
    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const organization = await this.organizationRepository.create(
          {
            ...createOrganizationDto,
            creatorId: userId, 
          },
          transactionHost
        )
       return organization
      });
      return result
    } catch (err) {
      console.log(err)
      return err
    }
  }

  findAll() {
    return this.organizationRepository.findAll()
  }

  async findOne(id: number) {
    const organization = await this.organizationRepository.findByPk(id)
    if (!organization) {
      throw new HttpException('Организация не найдена', HttpStatus.NOT_FOUND);
    }
    return organization
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    try{
      const organization = await this.findOne(id)
        if (!organization) {
          throw new HttpException('Организация не найдена', HttpStatus.NOT_FOUND);
        }
        return await organization.update(updateOrganizationDto)
    }catch(err){
      console.log(err)
      return err
    }
  }

  async remove(id: number) {
    const organization = await this.organizationRepository.findByPk(id)
    if (!organization) {
      throw new HttpException('Организация не найдена', HttpStatus.NOT_FOUND);
    }
    organization.destroy()
    return { code: 200, message: 'Организация удалена' }; 
  }
}
