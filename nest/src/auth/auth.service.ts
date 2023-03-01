import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthUserDto} from './dto/auth-user.dto';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/entities/users.entity";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}

    async login(authUserDto: AuthUserDto) {
        const user = await this.validateUser(authUserDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.createUser(userDto)
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {id: user.id, email: user.email, roles: user.roles, permissions: user.permissions}
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: AuthUserDto) {
        const user = await this.userService.getUserByEmailWithPassword(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'Некорректный емайл или пароль'})
    }
}