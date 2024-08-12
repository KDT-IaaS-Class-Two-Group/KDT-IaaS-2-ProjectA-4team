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
