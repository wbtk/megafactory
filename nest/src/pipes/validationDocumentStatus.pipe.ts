import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {ValidationException} from "../exceptions/validation.exception";
import { OPTIONS } from "src/documents/options/options";

@Injectable()
export class ValidationDocumentStatusPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if(metadata.type === 'param') {
            if(Object.keys(OPTIONS.types).includes(value.type) && !Object.keys(OPTIONS.types[value.type].statuses).includes(value.status)){
                throw new ValidationException(`${value} - неизвестный статус документа`)
            }
        }
        if(metadata.type === 'body') {
            if(Object.keys(OPTIONS.types).includes(value.type) && !Object.keys(OPTIONS.types[value.type].statuses).includes(value.status)){
                throw new ValidationException(`${value.status} - неизвестный статус документа`)
            }
        }
        return value;
    }
}