//컨트롤러
import { Controller, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { productsServiceDate } from './expirationDateProduct.service';
import IProduct from '@db/products/product.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
/**
 * @jojayeon 24.08.06
 * * 유통기한 관리 페이지 서버 컨트롤러
 */
@UseGuards(JwtAuthGuard)
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
