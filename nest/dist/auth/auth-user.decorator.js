"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = exports.AuthUserFn = void 0;
const common_1 = require("@nestjs/common");
const AuthUserFn = (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
};
exports.AuthUserFn = AuthUserFn;
exports.AuthUser = (0, common_1.createParamDecorator)(exports.AuthUserFn);
//# sourceMappingURL=auth-user.decorator.js.map