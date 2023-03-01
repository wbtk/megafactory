import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';

@Injectable()
export class FilesService {

  constructor(
    @InjectModel(File) private fileRepository: typeof File,
    private sequelize: Sequelize
    ){} 

  async create(createFileDto: CreateFileDto, file: Express.Multer.File, creatorId: number) {
     try {
      const result = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const entity = await this.fileRepository.create(
          {
            filename: file.originalname,
            path: file.path,
            size: file.size,
            mimetype: file.mimetype,
            ...createFileDto, 
            creatorId: creatorId,
          },
          transactionHost
        )
       return entity 
      });
      return result
     } catch (err) {
      console.log(err)
      return err
    }
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
