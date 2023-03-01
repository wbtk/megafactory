import { PartialType } from '@nestjs/swagger';
import { CreatePropertyGroupDto } from "./create-property-group.dto";
export class UpdatePropertyGroupDto extends PartialType(CreatePropertyGroupDto) {}
