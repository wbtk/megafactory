"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const roles_entity_1 = require("./entities/roles.entity");
let RolesService = class RolesService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async createRole(data) {
        return await this.roleRepository.create(data);
    }
    async updateRole(id, dto) {
        const role = await this.roleRepository.findByPk(id);
        if (!role) {
            throw new common_1.HttpException('Роль не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        await role.update(dto);
        return role;
    }
    async deleteRole(id) {
        const role = await this.roleRepository.findByPk(id);
        if (!role) {
            throw new common_1.HttpException('Роль не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        await role.destroy();
        return { code: 200, message: 'Роль удалена' };
    }
    async getAllRoles() {
        const roles = await this.roleRepository.findAll({ include: { all: true } });
        return roles;
    }
    async getRoleByName(name) {
        return await this.roleRepository.findOne({ where: { name } });
    }
    async getRoleById(id) {
        return await this.roleRepository.findByPk(id);
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(roles_entity_1.Role)),
    __metadata("design:paramtypes", [Object])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map