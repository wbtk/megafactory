import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FieldsDataTypeAndFormTypeToArray implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): any {
    if(typeof value['dataType'] === 'string'){
      value['dataType'] = [value['dataType']];
    }
    if(typeof value['formType'] === 'string'){
      value['formType'] = [value['formType']];
    }
    return value;
  }
}