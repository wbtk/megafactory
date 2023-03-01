import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/roles.entity';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role){}

    async createRole(data){
        return await this.roleRepository.create(data)
    }

    async updateRole(id: number, dto: CreateRoleDto){
        const role = await this.roleRepository.findByPk(id)
        if (!role) {
            throw new HttpException('Роль не найдена', HttpStatus.NOT_FOUND)
        }
        await role.update(dto)
        return role
    }

    async deleteRole(id: number) {
        const role = await this.roleRepository.findByPk(id);
        if (!role) {
            throw new HttpException('Роль не найдена', HttpStatus.NOT_FOUND);
        }
        await role.destroy();
        return { code: 200, message: 'Роль удалена' };
    }

    async getAllRoles() {
        const roles = await this.roleRepository.findAll({include: {all: true}})
        return roles
    }
    
    async getRoleByName(name: string) {
        return await this.roleRepository.findOne({where: {name}})
    }

    async getRoleById(id: number) {
        return await this.roleRepository.findByPk(id)
    }

}
