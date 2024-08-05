//컨트롤러
import { Controller, Get, Delete, Param } from '@nestjs/common';
import { ProductsService } from './expirationDateProduct.service';
import IProduct from '@db/products/product.interface';

@Controller('productsDate')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<IProduct[]> {
    return this.productsService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsService.remove(id);
  }
}