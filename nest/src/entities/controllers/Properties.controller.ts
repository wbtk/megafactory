import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PropertiesService } from '../services/Properties.service';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import PermissionGuard from 'src/auth/permissions.guard';
import Permission from 'src/users/permissions.type';
import { Property } from '../entities/Property.entity';
import { FieldsDataTypeAndFormTypeToArray } from '../pipes/transformation/property/fieldsDataTypeAndFormTypeToArray.pipe';

@ApiTags('Свойства справочников')
@Controller('properties')
export class PropertiesController {

  constructor(private readonly propertiesService: PropertiesService) {}

  @ApiOperation({summary: 'Создание свойства'})
  @ApiResponse({status: 200, type: Property})
  @Post()
  @UsePipes(new FieldsDataTypeAndFormTypeToArray())
  @UseGuards(PermissionGuard(Permission.CreateProperty))
  create(@Body() createPropertyDto: CreatePropertyDto, @Req() req) {
    return this.propertiesService.create(createPropertyDto, req.user.id);
  }

  @ApiOperation({summary: 'Получение свойств по группе'})
  @ApiResponse({status: 200, type: Property})
  @Get('/group/:groupId')
  @UseGuards(PermissionGuard(Permission.ListProperty))
  findAll(@Param('groupId') groupId: string) {
    return this.propertiesService.findAllByGroup(+groupId);
  }

  @ApiOperation({summary: 'Получение свойства по ID'})
  @ApiResponse({status: 200, type: Property})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findById(+id);
  }

  @ApiOperation({summary: 'Обновление свойства'})
  @ApiResponse({status: 200, type: Property})
  @UsePipes(new FieldsDataTypeAndFormTypeToArray())
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.update(+id, updatePropertyDto);
  }

  @ApiOperation({summary: 'Удаление свойства'})
  @ApiResponse({status: 200})
  @Delete(':id')
  @UseGuards(PermissionGuard(Permission.DeleteProperty))
  remove(@Param('id') id: string, @Req() req) {
    return this.propertiesService.remove(+id, req.user.id);
  }

  @ApiOperation({summary: 'Восстановление свойства'})
  @ApiResponse({status: 200})
  @Post('/restore/:id')
  @UseGuards(PermissionGuard(Permission.RestoreProperty))
  restore(@Param('id') id: string) {
    return this.propertiesService.restore(+id);
  }
}
