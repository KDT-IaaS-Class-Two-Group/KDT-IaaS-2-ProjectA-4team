//컨트롤러
import { Controller, Get, Delete, Param } from '@nestjs/common';
import { productsServiceDate } from './expirationDateProduct.service';
import IProduct from '@db/products/product.interface';

@Controller('productsDate')
export class ProductsController {
  constructor(private readonly productsServiceDate: productsServiceDate) {}

  @Get()
  async findAll(): Promise<IProduct[]> {
    return this.productsServiceDate.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsServiceDate.remove(id);
  }
}