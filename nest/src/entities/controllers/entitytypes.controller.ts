import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EntityTypesService } from '../services/EntityTypes.service';
import { CreateEntityTypeDto } from '../dto/create-entity-type.dto';
import { UpdateEntityTypeDto } from '../dto/update-entity-type.dto';
import PermissionGuard from 'src/auth/permissions.guard';
import Permission from 'src/users/permissions.type';
import { EntityType } from '../entities/EntityType.entity';
import { EntityItem } from '../entities/EntityItem.entity';
import { EntitySection } from '../entities/EntitySection.entity';
import { Op } from 'sequelize';

@ApiTags('Справочники')
@Controller('entity-types')
export class EntityTypesController {
  constructor(private readonly entityTypesService: EntityTypesService) {}

  @ApiOperation({summary: 'Создание типа данных (Справочника)'})
  @ApiResponse({status: 200, type: EntityType})
  @Post()
  @UseGuards(PermissionGuard(Permission.CreateEntityType))
  create(@Body() createEntityDto: CreateEntityTypeDto, @Req() req) {
    return this.entityTypesService.create(createEntityDto, req.user.id);
  }

  @ApiOperation({summary: 'Получение всех типов данных (Справочников)'})
  @ApiResponse({status: 200, type: EntityType})
  @Get()
  @UseGuards(PermissionGuard(Permission.ListEntityType))
  findAll() {
    return this.entityTypesService.findAll();
  }

  @ApiOperation({summary: 'Получение типа данных (Справочника) по ID'})
  @ApiResponse({status: 200, type: EntityType})
  @Get(':id')
  @UseGuards(PermissionGuard(Permission.ViewEntityType))
  findById(@Param('id') id: string) {
    return this.entityTypesService.findById(+id);
  }

  @ApiOperation({summary: 'Обновление типа данных'})
  @ApiResponse({status: 200, type: EntityType})
  @Patch(':id')
  @UseGuards(PermissionGuard(Permission.UpdateEntityType))
  update(@Param('id') id: string, @Body() updateEntityDto: UpdateEntityTypeDto) {
    return this.entityTypesService.update(+id, updateEntityDto);
  }

  @ApiOperation({summary: 'Удаление типа данных (Справочника)'})
  @ApiResponse({status: 200})
  @Delete(':id')
  @UseGuards(PermissionGuard(Permission.DeleteEntityType))
  remove(@Param('id') id: string, @Req() req) {
    return this.entityTypesService.remove(+id, req.user.id);
  }

  @ApiOperation({summary: 'Восстановление типа данных (Справочника)'})
  @ApiResponse({status: 200})
  @Post('/restore/:id')
  @UseGuards(PermissionGuard(Permission.RestoreEntityType))
  restore(@Param('id') id: string) {
    return this.entityTypesService.restore(+id);
  }

  @ApiOperation({summary: 'Получение разделов типа данных (Справочника) по ID'})
  @ApiResponse({status: 200, type: EntitySection})
  @Get(':id/sections')
  @UseGuards(PermissionGuard(Permission.ViewEntityType))
  findEntityTypeSections(@Param('id') id: string) {
    return this.entityTypesService.findById(+id);
  }

  @ApiOperation({summary: 'Получение элементов типа данных (Справочника) по ID'})
  @ApiResponse({status: 200, type: EntityItem})
  @Get(':id/elements')
  @UseGuards(PermissionGuard(Permission.ViewEntityItem))
  findEntityTypeElements(
    @Param('id') id: string,
    @Query('name') name: string,
    @Query('limit') limit: number = 20,
    @Query('page') page: number = 1,
    @Query('sortBy') sortBy: string,
    @Query('sortDirection') sortDirection: 'ASC' | 'DESC'
    ){
      const where = {
        entityTypeId: id
      };
      if (name) {
        where['name'] = {
          [Op.like]: `%${name}%`
        };
      }
      const offset = (page - 1) * limit;
      const order = sortBy ? [[sortBy, sortDirection]] : null;
      const options = { where, limit, offset, order };
      return this.entityTypesService.findEntityTypeElements(options);
  }

  @ApiOperation({summary: 'Получение дерева разделов справочника'})
  @ApiResponse({status: 200, type: EntitySection})
  @Get(':id/tree')
  @UseGuards(PermissionGuard(Permission.ListEntitySection))
  tree(@Param('id') id: number) {
    return this.entityTypesService.tree(id);
  }

}
