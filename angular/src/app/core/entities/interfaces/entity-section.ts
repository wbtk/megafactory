import { UserData } from "../..";
import { EntityItem } from "./entity-item";
import { EntityType } from "./entity-type";

export interface EntitySection {
  id: number,
  name: string,
  sort: number,
  entityType: EntityType,
  parent: EntitySection,
  childrens: EntitySection[],
  items: EntityItem[],
  creator: UserData
}
