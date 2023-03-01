"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedUserRoleUse = void 0;
const nestjs_sequelize_seeder_1 = require("nestjs-sequelize-seeder");
const user_role_entity_1 = require("../users/entities/user-role.entity");
(0, nestjs_sequelize_seeder_1.Seeder)({
    model: user_role_entity_1.UserRole,
    containsForeignKeys: true
});
class SeedUserRoleUse {
    run() {
        const data = [
            {
                roleId: 1,
                userId: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                roleId: 2,
                userId: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ];
        return data;
    }
}
exports.SeedUserRoleUse = SeedUserRoleUse;
//# sourceMappingURL=user-role.seed.js.map