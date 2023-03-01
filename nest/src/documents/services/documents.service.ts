import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Document } from '../entities/document.entity';
import { OPTIONS } from '../options/options';
import { CreateDocumentDto } from '../dto/create-document.dto';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { User } from 'src/users/entities/users.entity';
import { Organization } from 'src/organizations/entities/organization.entity';
import { Role } from 'src/users/entities/roles.entity';

@Injectable()
export class DocumentsService {

constructor(
  @InjectModel(Document) private documentRepository: typeof Document, 
  private sequelize: Sequelize
  ){}

  async create(createDocumentDto: CreateDocumentDto, userId: number) {

    this.validationDocumentProperties(createDocumentDto.type, createDocumentDto)

    try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const documentNumber = await this.generateDucumentNumber(createDocumentDto.type)
        const document = await this.documentRepository.create(
          {
            ...createDocumentDto, 
            creatorId: userId, 
            number: documentNumber,
            status: createDocumentDto.status ? createDocumentDto.status : Object.keys(OPTIONS.types[createDocumentDto.type]['statuses'])[0]
          },
          transactionHost
        )
       return document
      });
      return result
    } catch (err) {
      console.log(err)
      return err
    }
  }

  findAll() {
    return this.documentRepository.findAll()
  }

  async findAllByType(type: string) {
    const documents = await this.documentRepository.findAll({
      where: {type: type},
      include: [
        {
          model: User,
          attributes: ['id', 'lastname', 'firstname', 'patronymic', 'email'],
          include: [{
            model: Role,
            attributes: ['id', 'name'],
          }]
        }
      ]
    });

    for (let [index, document] of Object.entries(documents)) {
      const properties = document.properties
      Object.entries(properties).forEach(element => {
        documents[index]['dataValues'][[element[0]]] = element[1]
      });
    }
    
    return documents
  }

  async findOne(id: number) {
    const document = await this.documentRepository.findByPk(id)
    if (!document) {
      throw new HttpException('Документ не найден', HttpStatus.NOT_FOUND);
    }
    return document
  }

  async findByNumber(type: string, number: number) {
    return await this.documentRepository.findAll({where: {type: type, number: number}})
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    try{
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const document = await this.documentRepository.findByPk(id)
        if (!document) {
          throw new HttpException('Документ не найден', HttpStatus.NOT_FOUND);
        }
        this.validationDocumentProperties(document.type, updateDocumentDto)
        return await document.update(updateDocumentDto, transactionHost)
      })
      return result
    }catch(err){
      console.log(err)
      return err
    }
  }

  async remove(id: number) {
    const document = await this.documentRepository.findByPk(id)
    if (!document) {
      throw new HttpException('Документ не найден', HttpStatus.NOT_FOUND);
    }
    document.destroy()
    return { code: 200, message: 'Документ удален' };
  }

  async generateDucumentNumber(type: string){
    const lastDocument = await this.documentRepository.findOne({
      where: {
        type: type
      },
      attributes: ['number'], 
      order: [['number', 'DESC']],
      paranoid: false
    })
    return lastDocument ? ++lastDocument.number : 1
  }

  getJsonProperties(type: string){
    return OPTIONS.types[type].properties
  }

  getDocumentStatuses(type: string){
    return OPTIONS.types[type].statuses
  }

  validationDocumentProperties(type: string, dto) {
    if(Object.keys(dto).includes('properties') && typeof dto.properties != 'object'){
      throw new HttpException('Отсутвуют доп. поля или неправильный формат', HttpStatus.BAD_REQUEST);
    }
    const documentProperties = OPTIONS.types[type].properties
    for (const key in dto.properties) {
        if (Object.prototype.hasOwnProperty.call(dto.properties, key)) {
            if(!Object.keys(documentProperties).includes(key)) {
                throw new HttpException(`Поле ${key} отсутсвует в документе`, HttpStatus.BAD_REQUEST)
            }
        }
    }
  }

}
