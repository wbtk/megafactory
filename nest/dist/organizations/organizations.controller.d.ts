import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
export declare class OrganizationsController {
    private readonly organizationsService;
    constructor(organizationsService: OrganizationsService);
    create(createOrganizationDto: CreateOrganizationDto, req: any): Promise<any>;
    findAll(): Promise<Organization[]>;
    findOne(id: string): Promise<Organization>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<any>;
    remove(id: string): Promise<{
        code: number;
        message: string;
    }>;
}
