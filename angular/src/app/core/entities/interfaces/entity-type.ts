import { UserData } from "../.."

export interface EntityType {
  id: number,
  name: string,
  sort: number,
  parentEntityTypeId?: number,
  parent?: EntityType,
  creator?: UserData
}
