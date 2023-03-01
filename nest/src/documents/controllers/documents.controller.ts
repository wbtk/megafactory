import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiProperty } from "@nestjs/swagger";
import { Document } from '../entities/document.entity';
import { DocumentsService } from '../services/documents.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import DocumentPermissionsGuard from 'src/auth/document-permissions.guard';
import { CreateDocumentDto } from '../dto/create-document.dto';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { ValidationDocumentTypePipe } from 'src/pipes/validationDocumentType.pipe';
import { ValidationDocumentStatusPipe } from 'src/pipes/validationDocumentStatus.pipe';

@ApiTags('Документы')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @ApiOperation({summary: 'Создание документа'})
  @ApiResponse({status: 200, type: Document})
  @Post()
  //@UseGuards(JwtAuthGuard)
  //@Roles('admin')
  @UsePipes(ValidationDocumentTypePipe)
  @UsePipes(ValidationDocumentStatusPipe)
  @UseGuards(DocumentPermissionsGuard('Create'))
  create(@Body() createDocumentDto: CreateDocumentDto, @Req() req) {
    return this.documentsService.create(createDocumentDto, req.user.id)
  }

  @UseGuards(DocumentPermissionsGuard('List'))
  @ApiOperation({summary: 'Получение всех документов'})
  @ApiResponse({status: 200, type: [Document]})
  @Get()
  findAll() {
    return this.documentsService.findAll();
  }

  @ApiOperation({summary: 'Получение всех документов по типу'})
  @ApiResponse({status: 200, type: [Document]})
  @UseGuards(DocumentPermissionsGuard('List'))
  @UsePipes(ValidationDocumentTypePipe)
  @Get('type/:type')
  findAllByType(@Param('type') type: string) {
    return this.documentsService.findAllByType(type);
  }

  @ApiOperation({summary: 'Получение документа по ID'})
  @ApiResponse({status: 200, type: Document})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentsService.findOne(+id);
  }

  @ApiOperation({summary: 'Получение документа по номеру'})
  @ApiResponse({status: 200, type: Document})
  @Get(':type/number/:number')
  findByNumber(@Param('type') type: string, @Param('number') number: string) {
    return this.documentsService.findByNumber(type, +number);
  }

  @ApiOperation({summary: 'Обновление данных документа'})
  @ApiResponse({status: 200, type: Document})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentsService.update(+id, updateDocumentDto);
  }

  @ApiOperation({summary: 'Удаление данных документа'})
  @ApiResponse({status: 200, type: Document})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentsService.remove(+id);
  }

  @ApiOperation({summary: 'Получение списка дополнительных полей документа'})
  @ApiResponse({status: 200, type: Array})
  @Get(':type/properties')
  getJsonProperties(@Param('type') type: string) {
    return this.documentsService.getJsonProperties(type)
  }

  @ApiOperation({summary: 'Получение списка статусов у типа документа'})
  @ApiResponse({status: 200, type: Array})
  @Get(':type/statuses')
  getDocumentStatuses(@Param('type') type: string) {
    return this.documentsService.getDocumentStatuses(type)
  }
}
