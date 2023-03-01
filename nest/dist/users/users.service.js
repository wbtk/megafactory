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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("./entities/users.entity");
const sequelize_1 = require("@nestjs/sequelize");
const roles_service_1 = require("./roles.service");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    constructor(userRepository, roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }
    async createUser(dto) {
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userRepository.create(Object.assign(Object.assign({}, dto), { password: hashPassword }));
        return user;
    }
    async updateUser(id, dto) {
        const user = await this.userRepository.findByPk(id);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        await user.update(dto);
        return user;
    }
    async deleteUser(id) {
        const user = await this.userRepository.findByPk(id);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        await user.destroy();
        return { code: 200, message: 'Пользователь удален' };
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({
            include: { all: true },
            attributes: { exclude: ['password'] }
        });
        return users;
    }
    async getUserById(id) {
        const user = await this.userRepository.findByPk(id, {
            include: { all: true },
            attributes: { exclude: ['password'] }
        });
        if (user) {
            return user;
        }
        else {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
            attributes: { exclude: ['password'] }
        });
        if (user) {
            return user;
        }
        else {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getUserByEmailWithPassword(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
        if (user) {
            return user;
        }
        else {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async addRole(dto) {
        const user = await this.getUserById(dto.userId);
        const role = await this.roleService.getRoleById(dto.roleId);
        if (role && user) {
            await user.$add('role', role.id);
            return { code: 200, message: 'Роль добавлена пользователю' };
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async removeRole(dto) {
        const user = await this.getUserById(dto.userId);
        const role = await this.roleService.getRoleById(dto.roleId);
        if (role && user) {
            await user.$remove('role', role.id);
            return { code: 200, message: 'Роль удалена у пользователя' };
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_entity_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map