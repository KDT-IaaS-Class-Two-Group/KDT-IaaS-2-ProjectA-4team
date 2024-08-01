import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sales/sales.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/rockcodersERP'),
    SaleModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
