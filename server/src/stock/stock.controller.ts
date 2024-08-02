import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { StockService } from './stock.service';
import IProduct from '@db/products/product.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// import { ObjectId } from 'mongoose';

@UseGuards(JwtAuthGuard)
@Controller('product')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async getAllProducts(): Promise<IProduct[]> {
    return this.stockService.getAllProducts();
  }

  @Post('order')
  async createProduct(@Body() productDto: IProduct): Promise<IProduct> {
    return this.stockService.createProduct(productDto);
  }

  @Put('update/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productDto: IProduct,
  ): Promise<IProduct> {
    console.log('패치들어옴.');
    const updatedProduct = await this.stockService.updateProduct(
      id,
      productDto,
    );
    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }
    return updatedProduct;
  }
}
