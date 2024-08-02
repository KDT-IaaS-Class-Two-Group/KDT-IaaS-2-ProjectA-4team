import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import saleSchema from '@db/sale/schema/sale.schema';
import { SaleService } from './sales.service';
import { SaleController } from './sales.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Sale', schema: saleSchema }])],
  providers: [SaleService],
  controllers: [SaleController],
})
export class SaleModule {}
