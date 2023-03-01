import { CatalogsService } from './catalogs.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
export declare class CatalogsController {
    private readonly catalogsService;
    constructor(catalogsService: CatalogsService);
    create(createCatalogDto: CreateCatalogDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCatalogDto: UpdateCatalogDto): string;
    remove(id: string): string;
}
