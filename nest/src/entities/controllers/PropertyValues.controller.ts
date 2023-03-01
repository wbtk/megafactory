import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PropertyValuesService } from '../services/PropertyValues.service';
import { CreatePropertyValueDto } from '../dto/create-property-value.dto';
import { UpdatePropertyValueDto } from '../dto/update-property-value.dto';
import PermissionGuard from 'src/auth/permissions.guard';
import Permission from 'src/users/permissions.type';
import { PropertyValue } from '../entities/PropertyValue.entity';
import { where } from 'sequelize';

@ApiTags('Группы свойств справочников')
@Controller('property-values')
export class PropertyValuesController {

  constructor(private readonly propertyValuesService: PropertyValuesService) {}

  @ApiOperation({summary: 'Создание значения свойства'})
  @ApiResponse({status: 200, type: PropertyValue})
  @Post()
  @UseGuards(PermissionGuard(Permission.CreatePropertyValue))
  create(@Body() createPropertyValueDto: CreatePropertyValueDto, @Req() req) {
    return this.propertyValuesService.create(createPropertyValueDto, req.user.id);
  }

  @ApiOperation({summary: 'Получение всех значений свойств'})
  @ApiResponse({status: 200, type: PropertyValue})
  @Get()
  @UseGuards(PermissionGuard(Permission.ListPropertyValue))
  findAll() {
    return this.propertyValuesService.findAll();
  }

  @ApiOperation({summary: 'Получение значений по ID'})
  @ApiResponse({status: 200, type: PropertyValue})
  @Get(':id')
  @UseGuards(PermissionGuard(Permission.ViewPropertyValue))
  findOne(@Param('id') id: string) {
    return this.propertyValuesService.findById(+id);
  }

  @ApiOperation({summary: 'Получение значений по ID свойства'})
  @ApiResponse({status: 200, type: PropertyValue})
  @Get('/property/:id')
  @UseGuards(PermissionGuard(Permission.ViewPropertyValue))
  findValuesByPropertyId(@Param('id') id: string) {
    return this.propertyValuesService.findByProperty(+id);
  }

  @ApiOperation({summary: 'Обновление значений свойств'})
  @ApiResponse({status: 200, type: PropertyValue})
  @Patch(':id')
  @UseGuards(PermissionGuard(Permission.UpdatePropertyValue))
  update(@Param('id') id: string, @Body() updatePropertyValueDto: UpdatePropertyValueDto, @Req() req) {
    return this.propertyValuesService.update(+id, updatePropertyValueDto, req.user.id);
  }

  @ApiOperation({summary: 'Удаление значений свойств'})
  @ApiResponse({status: 200})
  @Delete(':id')
  @UseGuards(PermissionGuard(Permission.DeletePropertyValue))
  remove(@Param('id') id: string, @Req() req) {
    return this.propertyValuesService.remove(+id, req.user.id);
  }

  @ApiOperation({summary: 'Восстановление значений свойств'})
  @ApiResponse({status: 200})
  @Post('/restore/:id')
  @UseGuards(PermissionGuard(Permission.RestorePropertyValue))
  restore(@Param('id') id: string) {
    return this.propertyValuesService.restore(+id); 
  }
}
