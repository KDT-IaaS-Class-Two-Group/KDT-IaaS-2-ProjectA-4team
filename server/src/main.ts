import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin : "http://localhost:3000",
    methods: "GET, POST, PUT, PATCH, DELETE",
    allowedHeaders: "Content-type, Authorization",
    credentials: true,
  })
  await app.listen(3001);
  console.log(`http://localhost:3001`);
}
bootstrap();
