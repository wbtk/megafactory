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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const users_service_1 = require("./users.service");
const users_entity_1 = require("./entities/users.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const add_role_dto_1 = require("./dto/add-role.dto");
const permissions_type_1 = require("./permissions.type");
const auth_user_decorator_1 = require("../auth/auth-user.decorator");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async me(user) {
        try {
            return await this.usersService.getUserByEmail(user.email);
        }
        catch (error) {
            throw new common_1.HttpException(user, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateMe(user, dto) {
        try {
            return this.usersService.updateUser(user.id, dto);
        }
        catch (error) {
            throw new common_1.HttpException(user, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    create(dto) {
        return this.usersService.createUser(dto);
    }
    update(id, dto) {
        return this.usersService.updateUser(id, dto);
    }
    destroyUser(id) {
        return this.usersService.deleteUser(id);
    }
    getAll() {
        return this.usersService.getAllUsers();
    }
    getById(id) {
        return this.usersService.getUserById(id);
    }
    getByEmail(email) {
        return this.usersService.getUserByEmail(email);
    }
    addRole(dto) {
        return this.usersService.addRole(dto);
    }
    removeRole(dto) {
        return this.usersService.removeRole(dto);
    }
    getAllPermissions() {
        return permissions_type_1.default;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение пользователем своих данных' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_entity_1.User }),
    (0, common_1.Get)('/me'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "me", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление своих данных пользователем' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_entity_1.User }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/me'),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_entity_1.User, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateMe", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_entity_1.User }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление данных пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_entity_1.User }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление пользвателя' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "destroyUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех пользователей' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_entity_1.User] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение пользователя по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_entity_1.User] }),
    (0, common_1.Get)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение пользователя по Email' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_entity_1.User] }),
    (0, common_1.Get)('/email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getByEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавление роли пользвателю' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_entity_1.User] }),
    (0, common_1.Post)('/add-role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление роли у пользвателя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_entity_1.User] }),
    (0, common_1.Post)('/remove-role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение списка прав доступа' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Get)('/permissions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllPermissions", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Пользователи'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map