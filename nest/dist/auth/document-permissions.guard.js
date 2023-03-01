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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const permissions_type_1 = require("../users/permissions.type");
const jwt_1 = require("@nestjs/jwt");
const DocumentPermissionsGuard = (permission) => {
    let PermissionGuardMixin = class PermissionGuardMixin {
        constructor(jwtService, userService) {
            this.jwtService = jwtService;
            this.userService = userService;
        }
        async canActivate(context) {
            const req = context.switchToHttp().getRequest();
            try {
                const authHeader = req.headers.authorization;
                const bearer = authHeader.split(' ')[0];
                const token = authHeader.split(' ')[1];
                if (bearer !== 'Bearer' || !token) {
                    throw new common_1.UnauthorizedException({ message: 'Пользователь не авторизован' });
                }
                const jwtUser = this.jwtService.verify(token);
                const user = await this.userService.getUserById(jwtUser.id);
                req.user = user;
                let documentType = null;
                if (req.params) {
                    for (const key in req.params) {
                        if (key === 'type') {
                            const type = req.params[key];
                            documentType = type[0].toUpperCase() + type.slice(1);
                        }
                    }
                }
                if (req.body) {
                    for (const key in req.body) {
                        if (key === 'type') {
                            const type = req.body[key];
                            documentType = type[0].toUpperCase() + type.slice(1);
                        }
                    }
                }
                let allowed = false;
                let permissionKey = null;
                for (const key in permissions_type_1.default) {
                    if (key === permission + documentType) {
                        permissionKey = key;
                    }
                }
                if (user.permissions.includes(permissionKey)) {
                    allowed = true;
                }
                user.roles.map((role) => {
                    if (role.permissions.includes(permissionKey)) {
                        allowed = true;
                    }
                });
                return allowed;
            }
            catch (e) {
                console.log(e);
                throw new common_1.HttpException('Нет доступа', common_1.HttpStatus.FORBIDDEN);
            }
        }
    };
    PermissionGuardMixin = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [jwt_1.JwtService, users_service_1.UsersService])
    ], PermissionGuardMixin);
    return (0, common_1.mixin)(PermissionGuardMixin);
};
exports.default = DocumentPermissionsGuard;
//# sourceMappingURL=document-permissions.guard.js.map