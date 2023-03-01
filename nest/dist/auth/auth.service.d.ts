import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthUserDto } from './dto/auth-user.dto';
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(authUserDto: AuthUserDto): Promise<{
        accessToken: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        accessToken: string;
    }>;
    private generateToken;
    private validateUser;
}
