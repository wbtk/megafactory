import { UserData } from "../..";
import { EntityType } from "./entity-type";

export enum PropertyDataTypes {
  text     = 'Текст',
  integer  = 'Число',
  json     = 'Json',
  relation = 'Связь',
  option   = 'Опции'
}

export enum PropertyFormType {
  string   = 'Строка',
  text     = 'Текст',
  integer  = 'Число',
  price    = 'Цена',
  image    = 'Изображение',
  dropdown = 'Выпадающий список',
  json     = 'Json',
  checkbox = 'Чекбокс',
  radio    = 'Радио'
}

export interface Property {
  id: number,
  propertyGroupId: number,
  name: string,
  description: string,
  sort: number,
  options: string,
  json: string,
  active: boolean,
  required: boolean,
  visible: boolean,
  searchable: boolean,
  sortable: boolean,
  multiple: boolean,
  dataType: PropertyDataTypes,
  formType: PropertyFormType,
  relationTypeId: number,
  relation: EntityType,
  creator: UserData
}
