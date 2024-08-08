import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from '../schemas/sale.schema';
import { SaleService } from './sales.service';
import { SaleController } from './sales.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
    AuthModule,
  ],
  providers: [SaleService],
  controllers: [SaleController],
})
export class SaleModule {}
