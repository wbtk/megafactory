import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StocksService {
    create(createStockDto: CreateStockDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStockDto: UpdateStockDto): string;
    remove(id: number): string;
}
