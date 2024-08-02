// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import memberSchema from '@db/members/schema/member.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Member', schema: memberSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
