import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class ValidationDocumentStatusPipe implements PipeTransform<any> {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
