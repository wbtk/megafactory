import { UserData } from "../..";
import { Property } from "./property";

export interface PropertyValue {
  id: number,
  sort: number,
  integer: number,
  text: string,
  json: JSON,
  relation: string,
  option: string,
  property: Property,
  creator: UserData
}
