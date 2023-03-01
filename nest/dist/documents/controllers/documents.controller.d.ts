import { Document } from '../entities/document.entity';
import { DocumentsService } from '../services/documents.service';
import { CreateDocumentDto } from '../dto/create-document.dto';
import { UpdateDocumentDto } from '../dto/update-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentDto, req: any): Promise<any>;
    findAll(): Promise<Document[]>;
    findAllByType(type: string): Promise<Document[]>;
    findOne(id: string): Promise<Document>;
    findByNumber(type: string, number: string): Promise<Document[]>;
    update(id: string, updateDocumentDto: UpdateDocumentDto): Promise<any>;
    remove(id: string): Promise<{
        code: number;
        message: string;
    }>;
    getJsonProperties(type: string): any;
    getDocumentStatuses(type: string): any;
}
