import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exceptions/validation.exception";
import { OPTIONS } from "src/documents/options/options";

@Injectable()
export class ValidationDocumentTypePipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if(metadata.type === 'param') {
            if(!Object.keys(OPTIONS.types).includes(value)){
                throw new ValidationException(`${value} - неизвестный тип документа`)
            }
        }
        if(metadata.type === 'body') {
            if(!Object.keys(OPTIONS.types).includes(value.type)){
                throw new ValidationException(`${value.type} - неизвестный тип документа`)
            }
        }
        return value;
    }
}