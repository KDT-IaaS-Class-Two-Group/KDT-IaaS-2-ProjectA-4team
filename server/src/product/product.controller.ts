import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import IProduct from '@db/products/product.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<IProduct[]> {
    console.log('유저페이지');
    return this.productService.getAllProducts();
  }
}
