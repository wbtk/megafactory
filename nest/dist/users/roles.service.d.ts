import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/roles.entity';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(data: any): Promise<Role>;
    updateRole(id: number, dto: CreateRoleDto): Promise<Role>;
    deleteRole(id: number): Promise<{
        code: number;
        message: string;
    }>;
    getAllRoles(): Promise<Role[]>;
    getRoleByName(name: string): Promise<Role>;
    getRoleById(id: number): Promise<Role>;
}
