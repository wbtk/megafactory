import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class FieldsDataTypeAndFormTypeToArray implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): any;
}
