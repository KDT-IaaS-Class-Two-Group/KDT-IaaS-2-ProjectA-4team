import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import IProduct from '@db/products/product.interface';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<IProduct[]> {
    return this.productService.getAllProducts();
  }
}
