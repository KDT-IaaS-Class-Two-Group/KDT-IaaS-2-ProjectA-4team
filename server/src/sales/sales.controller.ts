import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SaleService } from './sales.service';
import ISale from '@db/sale/Sale.interface';

@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get()
  async findAll(): Promise<ISale[]> {
    return this.saleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ISale | null> {
    return this.saleService.findById(id);
  }

  @Post('order/:name')
  async findByMemberID(@Param('name') name:string):Promise<ISale[]>{
    return this.saleService.findByMemberID(name);
  }
}