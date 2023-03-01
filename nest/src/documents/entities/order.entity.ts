import { BelongsTo, DefaultScope, HasMany } from "sequelize-typescript";
import { Document } from "./document.entity";

@DefaultScope(() => ({
    where: {
        type: 'order'
    }
}))
export class Order extends Document {}