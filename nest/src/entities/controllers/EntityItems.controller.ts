import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Op } from 'sequelize';
import PermissionGuard from 'src/auth/permissions.guard';
import Permission from 'src/users/permissions.type';
import { CreateEntityItemDto } from '../dto/create-entity-item.dto';
import { UpdateEntityItemDto } from '../dto/update-entity-item.dto';
import { EntityItem } from '../entities/EntityItem.entity';
import { EntityItemsService } from '../services/EntityItems.service';

@ApiTags('Элементы справочника')
@Controller('entity-items')
export class EntityItemsController {

  constructor(private readonly entityItemsService: EntityItemsService) {} 

  @ApiOperation({summary: 'Создание раздела типа данных (Справочника)'})
  @ApiResponse({status: 200, type: EntityItem})
  @Post()
  @UseGuards(PermissionGuard(Permission.CreateEntityItem))
  create(@Body() createEntityItemDto: CreateEntityItemDto, @Req() req) {
    return this.entityItemsService.create(createEntityItemDto, req.user.id);
  }

  @ApiOperation({summary: 'Получение всех элементов справочников'})
  @ApiResponse({status: 200, type: EntityItem})
  @Get()
  @UseGuards(PermissionGuard(Permission.ListEntityItem))
  findAll() {
    return this.entityItemsService.findAll();
  }

  @ApiOperation({summary: 'Получение всех элементов справочника'})
  @ApiResponse({status: 200, type: EntityItem})
  @Get('entity-type/:entityTypeId')
  @UseGuards(PermissionGuard(Permission.ListEntityItem))
  findAllByEntityType(
    @Param('entityTypeId') entityTypeId: string,
    @Query('name') name: string,
    @Query('limit') limit: number = 20,
    @Query('page') page: number = 1,
    @Query('sortBy') sortBy: string,
    @Query('sortDirection') sortDirection: 'ASC' | 'DESC'
  ) {
    const where = {
      entityTypeId: +entityTypeId
    };
    if (name) {
      where['name'] = {
        [Op.like]: `%${name}%`
      };
    }
    const offset = (page - 1) * limit;
    const order = sortBy ? [[sortBy, sortDirection]] : null;
    const options = { where, limit, offset, order };
    return this.entityItemsService.findEntityTypeElements(options);
  }

  @ApiOperation({summary: 'Получение элемента справочника по ID'})
  @ApiResponse({status: 200, type: EntityItem})
  @Get('/:id')
  @UseGuards(PermissionGuard(Permission.ViewEntityItem))
  findById(@Param('id') id: number) {
    return this.entityItemsService.findById(id);
  }

  @ApiOperation({summary: 'Обновление раздела типа данных'})
  @ApiResponse({status: 200, type: EntityItem})
  @Patch(':id')
  @UseGuards(PermissionGuard(Permission.UpdateEntityItem))
  update(@Param('id') id: string, @Body() updateEntityDto: UpdateEntityItemDto) {
    return this.entityItemsService.update(+id, updateEntityDto);
  }

  @ApiOperation({summary: 'Удаление раздела типа данных (Справочника)'})
  @ApiResponse({status: 200})
  @Delete(':id')
  @UseGuards(PermissionGuard(Permission.DeleteEntityItem))
  remove(@Param('id') id: string, @Req() req) {
    return this.entityItemsService.remove(+id, req.user.id);
  }

  @ApiOperation({summary: 'Восстановление раздела типа данных (Справочника)'})
  @ApiResponse({status: 200})
  @Post('/restore/:id')
  @UseGuards(PermissionGuard(Permission.RestoreEntityItem))
  restore(@Param('id') id: string) {
    return this.entityItemsService.restore(+id);
  }

}