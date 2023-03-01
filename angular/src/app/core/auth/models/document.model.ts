import { UserData } from "../.."

export interface IDocument {
    id: number
    committed: boolean
    date: Date
    number: number
    type: string
    organizationId: number
    contractorId: number
    parentId: number
    status: string
    creatorId: number
    amount: number
    sort: number
    properties: JSON
    creator: UserData
}