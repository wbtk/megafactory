"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntityTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_entity_type_dto_1 = require("./create-entity-type.dto");
class UpdateEntityTypeDto extends (0, swagger_1.PartialType)(create_entity_type_dto_1.CreateEntityTypeDto) {
}
exports.UpdateEntityTypeDto = UpdateEntityTypeDto;
//# sourceMappingURL=update-entity-type.dto.js.map