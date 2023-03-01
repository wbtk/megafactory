import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import PermissionGuard from 'src/auth/permissions.guard';
import Permission from 'src/users/permissions.type';
import { Organization } from './entities/organization.entity';

@ApiTags('Организации')
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @ApiOperation({summary: 'Создание организации'})
  @ApiResponse({status: 200, type: Organization})
  @UseGuards(PermissionGuard(Permission.CreateOrganization))
  create(@Body() createOrganizationDto: CreateOrganizationDto, @Req() req) {
    return this.organizationsService.create(createOrganizationDto, req.user.id);
  }

  @Get()
  @ApiOperation({summary: 'Получение всех организаций'})
  @ApiResponse({status: 200, type: [Organization]})
  @UseGuards(PermissionGuard(Permission.ListOrganization))
  findAll() {
    return this.organizationsService.findAll();
  }

  @ApiOperation({summary: 'Получение организации по ID'})
  @ApiResponse({status: 200, type: [Organization]})
  @UseGuards(PermissionGuard(Permission.ViewOrganization))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(+id);
  }

  @ApiOperation({summary: 'Редактирование организации'})
  @ApiResponse({status: 200, type: [Organization]})
  @UseGuards(PermissionGuard(Permission.UpdateOrganization))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationsService.update(+id, updateOrganizationDto);
  }

  @ApiOperation({summary: 'Удаление организации'})
  @ApiResponse({status: 200, type: [Organization]})
  @UseGuards(PermissionGuard(Permission.DeleteOrganization))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(+id);
  }
}
