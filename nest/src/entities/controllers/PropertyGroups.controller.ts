import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PropertyGroupsService } from '../services/PropertyGroups.service';
import { CreatePropertyGroupDto } from '../dto/create-property-group.dto';
import { UpdatePropertyGroupDto } from '../dto/update-property-group.dto';
import PermissionGuard from 'src/auth/permissions.guard';
import Permission from 'src/users/permissions.type';
import { PropertyGroup } from '../entities/PropertyGroup.entity';

@ApiTags('Группы свойств справочников')
@Controller('property-groups')
export class PropertyGroupsController {

  constructor(private readonly propertyGroupsService: PropertyGroupsService) {}

  @ApiOperation({summary: 'Создание группы свойств'})
  @ApiResponse({status: 200, type: PropertyGroup})
  @Post()
  @UseGuards(PermissionGuard(Permission.CreatePropertyGroup))
  create(@Body() createPropertyGroupDto: CreatePropertyGroupDto, @Req() req) {
    return this.propertyGroupsService.create(createPropertyGroupDto, req.user.id);
  }

  @ApiOperation({summary: 'Получение всех групп свойств'})
  @ApiResponse({status: 200, type: PropertyGroup})
  @Get()
  @UseGuards(PermissionGuard(Permission.ListPropertyGroup))
  findAll() {
    return this.propertyGroupsService.findAll();
  }

  @ApiOperation({summary: 'Получение групп свойств справочника'})
  @ApiResponse({status: 200, type: PropertyGroup})
  @Get('entity-type/:entityTypeId')
  @UseGuards(PermissionGuard(Permission.ListPropertyGroup))
  findAllByEntityType(@Param('entityTypeId') entityTypeId: string) {
    return this.propertyGroupsService.findAllByEntityType(+entityTypeId);
  }

  @ApiOperation({summary: 'Получение групп свойств раздела справочника'})
  @ApiResponse({status: 200, type: PropertyGroup})
  @Get('entity-section/:entitySectionId')
  @UseGuards(PermissionGuard(Permission.ListPropertyGroup))
  findAllByEntitySection(@Param('entitySectionId') entitySectionId: string) {
    return this.propertyGroupsService.findAllByEntitySection(+entitySectionId);
  }

  @ApiOperation({summary: 'Получение групп свойств элемента справочника'})
  @ApiResponse({status: 200, type: PropertyGroup})
  @Get('entity-item/:entityItemId')
  @UseGuards(PermissionGuard(Permission.ListPropertyGroup))
  findAllByEntityItem(@Param('entityItemId') entityItemId: number) {
    return this.propertyGroupsService.findAllByEntityItem(+entityItemId);
  }

  @ApiOperation({summary: 'Получение группы свойств по ID'})
  @ApiResponse({status: 200, type: PropertyGroup})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyGroupsService.findById(+id);
  }

  @ApiOperation({summary: 'Обновление данных группы свойств'})
  @ApiResponse({status: 200, type: PropertyGroup})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyGroupDto: UpdatePropertyGroupDto) {
    return this.propertyGroupsService.update(+id, updatePropertyGroupDto);
  }

  @ApiOperation({summary: 'Удаление группы свойств'})
  @ApiResponse({status: 200})
  @Delete(':id')
  @UseGuards(PermissionGuard(Permission.DeletePropertyGroup))
  remove(@Param('id') id: string, @Req() req) {
    return this.propertyGroupsService.remove(+id, req.user.id);
  }

  @ApiOperation({summary: 'Восстановление группы свойств'})
  @ApiResponse({status: 200})
  @Post('/restore/:id')
  @UseGuards(PermissionGuard(Permission.RestorePropertyGroup))
  restore(@Param('id') id: string) {
    return this.propertyGroupsService.restore(+id);
  }
}
