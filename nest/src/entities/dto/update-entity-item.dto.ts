import { PartialType } from '@nestjs/swagger';
import { CreateEntityItemDto } from "./create-entity-item.dto";
export class UpdateEntityItemDto extends PartialType(CreateEntityItemDto) {}
