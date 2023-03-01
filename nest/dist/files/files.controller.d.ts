/// <reference types="multer" />
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    upload(createFileDto: CreateFileDto, file: Express.Multer.File, req: any): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFileDto: UpdateFileDto): string;
    remove(id: string): string;
}
