import { Sequelize } from 'sequelize-typescript';
import { Document } from './entities/document.entity';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
export declare class DocumentsService {
    private documentRepository;
    private sequelize;
    constructor(documentRepository: typeof Document, sequelize: Sequelize);
    create(createDocumentDto: CreateDocumentDto, userId: any): Promise<any>;
    findAll(): Promise<Document[]>;
    findAllByType(type: string): Promise<Document[]>;
    findOne(id: number): Promise<Document>;
    findByNumber(type: string, number: number): Promise<Document[]>;
    update(id: number, updateDocumentDto: UpdateDocumentDto): Promise<any>;
    remove(id: number): Promise<{
        code: number;
        message: string;
    }>;
    generateDucumentNumber(type: string): Promise<number>;
    getJsonProperties(type: string): any;
    getDocumentStatuses(type: string): any;
    validationDocumentProperties(type: string, dto: any): void;
}
