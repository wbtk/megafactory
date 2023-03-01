import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "./entities/users.entity";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {RolesService} from "./roles.service";
import {AddRoleDto} from "./dto/add-role.dto";
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {

    constructor( 
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService
        ){}

    async createUser(dto: CreateUserDto){
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userRepository.create({...dto, password: hashPassword})
        return user
    }

    async updateUser(id: number, dto: UpdateUserDto) {
        const user = await this.userRepository.findByPk(id);
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }
        await user.update(dto);
        return user;
    }

    async deleteUser(id: number) {
        const user = await this.userRepository.findByPk(id);
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }
        await user.destroy();
        return { code: 200, message: 'Пользователь удален' };
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({
            include: {all: true}, 
            attributes: {exclude: ['password']}
        })
        return users
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findByPk(id, {
            include: {all: true}, 
            attributes: {exclude: ['password']}
        })
        if (user) {
            return user;
        } else {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: {email}, 
            include: {all: true}, 
            attributes: {exclude: ['password']}
        })
        if (user) {
            return user;
        } else {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }
    }

    async getUserByEmailWithPassword(email: string) {
        const user = await this.userRepository.findOne({
            where: {email}, 
            include: {all: true}, 
        })
        if (user) {
            return user;
        } else {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.getUserById(dto.userId);
        const role = await this.roleService.getRoleById(dto.roleId);
        if (role && user) {
            await user.$add('role', role.id);
            return { code: 200, message: 'Роль добавлена пользователю' };
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async removeRole(dto: AddRoleDto) {
        const user = await this.getUserById(dto.userId);
        const role = await this.roleService.getRoleById(dto.roleId);
        if (role && user) {
            await user.$remove('role', role.id);
            return { code: 200, message: 'Роль удалена у пользователя' };
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

}
