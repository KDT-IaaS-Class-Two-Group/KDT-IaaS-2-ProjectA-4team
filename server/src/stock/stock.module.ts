import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
// import { Product, ProductSchema } from './product.schema';
import productSchema from '@db/products/schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: productSchema }]),
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
