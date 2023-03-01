import { UserData } from "../..";
import { EntityItem } from "./entity-item";
import { EntitySection } from "./entity-section";
import { EntityType } from "./entity-type";

export interface PropertyGroup {
  id: number,
  name: string,
  sort: number,
  entityTypes: EntityType[],
  entitySections: EntitySection[],
  entityItems: EntityItem[],
  creater: UserData
}
