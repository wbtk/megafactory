"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityItemsService = void 0;
const common_1 = require("@nestjs/common");
let EntityItemsService = class EntityItemsService {
    create(createEntityDto) {
        return 'This action adds a new catalog';
    }
    findAll() {
        return `This action returns all catalogs`;
    }
    findOne(id) {
        return `This action returns a #${id} catalog`;
    }
    update(id, updateCatalogDto) {
        return `This action updates a #${id} catalog`;
    }
    remove(id) {
        return `This action removes a #${id} catalog`;
    }
};
EntityItemsService = __decorate([
    (0, common_1.Injectable)()
], EntityItemsService);
exports.EntityItemsService = EntityItemsService;
//# sourceMappingURL=entityitem.service.js.map