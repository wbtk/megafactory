/// <reference types="multer" />
import { Sequelize } from 'sequelize-typescript';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';
export declare class FilesService {
    private fileRepository;
    private sequelize;
    constructor(fileRepository: typeof File, sequelize: Sequelize);
    create(createFileDto: CreateFileDto, file: Express.Multer.File, creatorId: number): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFileDto: UpdateFileDto): string;
    remove(id: number): string;
}
