import { UserLogService } from './userlog.service';
import { UserLog, UserLogSchema } from '../schemas/userLog.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsController } from './logs.controller';
import { TokenUtils } from '../utils/token.utils';
import { Member, MemberSchema } from '../schemas/member.schema';
import { JwtStrategy } from '../auth/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Product, ProductSchema } from '../schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserLog.name, schema: UserLogSchema },
      { name: Member.name, schema: MemberSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // 환경 변수에서 비밀 키 가져옴
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [LogsController],
  providers: [UserLogService, TokenUtils, JwtStrategy],
  exports: [UserLogService],
})
export class LogsModule {}
