// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Member, MemberSchema } from '../schemas/member.schema';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { LogsModule } from '../log/logs.module';
import { TokenUtils } from '../utils/token.utils';

/**
 * @crystal23733
 * @date 24.08.23
 * @description AuthModule은 인증과 관련된 모든 기능을 담당하는 NestJS 모듈입니다.
 *
 * 이 모듈은 사용자의 인증을 위한 컨트롤러, 서비스 및 전략을 설정하고,
 * JSON Web Token (JWT)과 관련된 설정을 포함합니다. Mongoose와 Passport 모듈도 포함되어
 * MongoDB를 통한 데이터 관리와 JWT 전략을 사용한 인증을 제공합니다.
 *
 * @module AuthModule
 */
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // 환경 변수에서 비밀 키 가져옴
        signOptions: { expiresIn: '1h' },
      }),
    }),
    LogsModule,
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    AuthService,
    {
      provide: TokenUtils,
      useFactory: (jwtService: JwtService) => new TokenUtils(jwtService),
      inject: [JwtService],
    },
  ],
  exports: [MongooseModule],
})
export class AuthModule {}
