import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/entities/users.entity";

@Table
export class File extends Model{

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'icon', description: 'Название файла'})
    @Column({type: DataType.STRING, allowNull: false})
    filename: string

    @ApiProperty({example: 'img/icon.jpg', description: 'Путь до файла'})
    @Column({type: DataType.STRING, allowNull: false})
    path: string

    @ApiProperty({example: '1024', description: 'Размер файла'})
    @Column({type: DataType.STRING, allowNull: false})
    size: string

    @ApiProperty({example: 'image', description: 'Mimetype до файла'})
    @Column({type: DataType.STRING, allowNull: false})
    mimetype: string

    @ApiProperty({example: 'image', description: 'Модуль'})
    @Column({type: DataType.STRING, allowNull: false})
    module: string

    @ApiProperty({example: 'image', description: 'Модель'})
    @Column({type: DataType.STRING, allowNull: false})
    entity: string

    @ApiProperty({example: 1, description: 'ID модели'})
    @Column({type: DataType.INTEGER, allowNull: false})
    entityId: number

    @ApiProperty({example: 'avatar', description: 'Название поля'})
    @Column({type: DataType.STRING, allowNull: false})
    field: string

    @ApiProperty({example: '1', description: 'ID создателя'})
    @Column({type: DataType.INTEGER, allowNull: false})
    creatorId: number

    @BelongsTo(() => User, 'creatorId')
    creator: User

    @ApiProperty({example: 1, description: 'Сортировка'})
    @Column({type: DataType.INTEGER, defaultValue: 1})
    sort: number

}
