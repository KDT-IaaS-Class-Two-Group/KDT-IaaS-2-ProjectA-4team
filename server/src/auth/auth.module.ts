// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import memberSchema from '@db/members/schema/member.schema';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Member', schema: memberSchema }]),
    JwtModule.register({
      secret: 'your_jwt_secret_key', // 비밀 키를 적절히 설정하세요
      signOptions: { expiresIn: '60m' }, // 토큰 만료 시간
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
