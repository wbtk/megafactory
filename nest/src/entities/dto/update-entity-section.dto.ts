import { PartialType } from '@nestjs/swagger';
import { CreateEntitySectionDto } from './create-entity-section.dto';

export class UpdateEntitySectionDto extends PartialType(CreateEntitySectionDto) {}
