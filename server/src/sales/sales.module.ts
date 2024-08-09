import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from '../schemas/sale.schema';
import { SaleService } from './sales.service';
import { SaleController } from './sales.controller';
import { AuthModule } from '../auth/auth.module';
import { MembersModule } from '../member/members.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
    AuthModule,
    MembersModule,
  ],
  providers: [SaleService],
  controllers: [SaleController],
})
export class SaleModule {}
