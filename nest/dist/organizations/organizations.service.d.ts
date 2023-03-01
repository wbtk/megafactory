import { Sequelize } from 'sequelize-typescript';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
export declare class OrganizationsService {
    private organizationRepository;
    private sequelize;
    constructor(organizationRepository: typeof Organization, sequelize: Sequelize);
    create(createOrganizationDto: CreateOrganizationDto, userId: number): Promise<any>;
    findAll(): Promise<Organization[]>;
    findOne(id: number): Promise<Organization>;
    update(id: number, updateOrganizationDto: UpdateOrganizationDto): Promise<any>;
    remove(id: number): Promise<{
        code: number;
        message: string;
    }>;
}
