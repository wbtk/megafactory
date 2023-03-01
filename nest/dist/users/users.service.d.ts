import { User } from "./entities/users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { RolesService } from "./roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
export declare class UsersService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof User, roleService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    updateUser(id: number, dto: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<{
        code: number;
        message: string;
    }>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUserByEmailWithPassword(email: string): Promise<User>;
    addRole(dto: AddRoleDto): Promise<{
        code: number;
        message: string;
    }>;
    removeRole(dto: AddRoleDto): Promise<{
        code: number;
        message: string;
    }>;
}
