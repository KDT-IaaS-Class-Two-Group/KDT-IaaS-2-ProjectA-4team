import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { Product, ProductSchema } from './product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
