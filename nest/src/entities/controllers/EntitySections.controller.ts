import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import PermissionGuard from 'src/auth/permissions.guard';
import Permission from 'src/users/permissions.type';
import { CreateEntitySectionDto } from '../dto/create-entity-section.dto';
import { UpdateEntitySectionDto } from '../dto/update-entity-section.dto';
import { EntitySection } from '../entities/EntitySection.entity';
import { EntitySectionsService } from '../services/EntitySections.service';

@ApiTags('Разделы справочника')
@Controller('entity-sections')
export class EntitySectionsController {

  constructor(
    private readonly entitySectionsService: EntitySectionsService
    ) {}

  @ApiOperation({summary: 'Создание раздела типа данных (Справочника)'})
  @ApiResponse({status: 200, type: EntitySection})
  @Post()
  @UseGuards(PermissionGuard(Permission.CreateEntitySection))
  create(@Body() createEntitySectionDto: CreateEntitySectionDto, @Req() req) {
    return this.entitySectionsService.create(createEntitySectionDto, req.user.id);
  }

  @ApiOperation({summary: 'Получение всех разделов справочников'})
  @ApiResponse({status: 200, type: EntitySection})
  @Get()
  @UseGuards(PermissionGuard(Permission.ListEntitySection))
  findAll() {
    return this.entitySectionsService.findAll();
  }

  @ApiOperation({summary: 'Получение дерева разделов справочника'})
  @ApiResponse({status: 200, type: EntitySection})
  @Get('/tree/:entityTypeId')
  @UseGuards(PermissionGuard(Permission.ListEntitySection))
  tree(@Param('entityTypeId') entityTypeId: number) {
    return this.entitySectionsService.tree(entityTypeId);
  }

  @ApiOperation({summary: 'Получение всех разделов справочников'})
  @ApiResponse({status: 200, type: EntitySection})
  @Get('/:id')
  @UseGuards(PermissionGuard(Permission.ListEntitySection))
  findById(@Param('id') entityTypeId: number) {
    return this.entitySectionsService.findById(entityTypeId);
  }

  @ApiOperation({summary: 'Обновление раздела типа данных'})
  @ApiResponse({status: 200, type: EntitySection})
  @Patch(':id')
  @UseGuards(PermissionGuard(Permission.UpdateEntitySection))
  update(@Param('id') id: string, @Body() updateEntityDto: UpdateEntitySectionDto) {
    return this.entitySectionsService.update(+id, updateEntityDto);
  }

  @ApiOperation({summary: 'Удаление раздела типа данных (Справочника)'})
  @ApiResponse({status: 200})
  @Delete(':id')
  @UseGuards(PermissionGuard(Permission.DeleteEntitySection))
  remove(@Param('id') id: string, @Req() req) {
    return this.entitySectionsService.remove(+id, req.user.id);
  }

  @ApiOperation({summary: 'Восстановление раздела типа данных (Справочника)'})
  @ApiResponse({status: 200})
  @Post('/restore/:id')
  @UseGuards(PermissionGuard(Permission.RestoreEntitySection))
  restore(@Param('id') id: string) {
    return this.entitySectionsService.restore(+id);
  }

}