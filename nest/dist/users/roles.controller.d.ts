import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Role } from './entities/roles.entity';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    create(dto: CreateRoleDto): Promise<Role>;
    update(id: number, dto: CreateRoleDto): Promise<Role>;
    getAll(): Promise<Role[]>;
    getByName(name: string): Promise<Role>;
    destroyUser(id: number): Promise<{
        code: number;
        message: string;
    }>;
}
