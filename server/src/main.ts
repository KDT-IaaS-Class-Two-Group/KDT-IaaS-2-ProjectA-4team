import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'", 'https://release.dyi1fscmksq0r.amplifyapp.com'],
        upgradeInsecureRequests: [],
      },
    }),
  );

  app.enableCors({
    origin: 'https://release.dyi1fscmksq0r.amplifyapp.com',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-type, Authorization',
    credentials: true,
  });

  await app.listen(3001);
  console.log(`http://localhost:3001`);
}
bootstrap();
