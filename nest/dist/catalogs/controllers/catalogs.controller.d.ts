import { CatalogsService } from '../services/catalogs.service';
import { CreateCatalogDto } from '../dto/create-catalog.dto';
import { UpdateCatalogDto } from '../dto/update-catalog.dto';
export declare class CatalogsController {
    private readonly catalogsService;
    constructor(catalogsService: CatalogsService);
    create(createCatalogDto: CreateCatalogDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateCatalogDto: UpdateCatalogDto): any;
    remove(id: string): any;
}
