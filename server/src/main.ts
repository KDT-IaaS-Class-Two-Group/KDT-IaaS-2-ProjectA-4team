import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  try {
    mongoose.connect("mongodb://localhost:27017/rockcodersERP");
    console.log("DB연결 성공");
  } catch(error) {
    console.error("DB연결 실패", error);
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
