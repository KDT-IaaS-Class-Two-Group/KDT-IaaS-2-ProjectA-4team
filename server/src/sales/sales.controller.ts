import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { SaleService } from './sales.service';
import ISale from '@db/sale/Sale.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
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

  @Get('orders/:name')
  async findByMemberName(@Param('name') name: string): Promise<ISale[]> {
    return this.saleService.findByMemberName(name);
  }

  @Post('salehistory')
  async buyProduct(
    @Body()
    body: {
      email: string;
      products: Array<{ productName: string; quantity: number }>;
      totalPrice: number;
      saleDate: string;
    },
  ) {
    try {
      const { email, products, totalPrice, saleDate } = body;
      await this.saleService.saleHistory(email, products, totalPrice, saleDate);

      return { message: 'Sale recorded successfully' };
    } catch (error) {
      console.error('Error in buyProduct:', error);
      throw new Error('Failed to process purchase');
    }
  }
}
