import { UserData } from "../..";
import { EntitySection } from "./entity-section";
import { EntityType } from "./entity-type";

export interface EntityItem {
  id: number,
  name: string,
  sort: number,
  entityType: EntityType,
  entitySections: EntitySection[],
  creator: UserData
}
