import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StocksController {
    private readonly stocksService;
    constructor(stocksService: StocksService);
    create(createStockDto: CreateStockDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStockDto: UpdateStockDto): string;
    remove(id: string): string;
}
