// src/members/members.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import memberSchema from '@db/members/schema/member.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Member', schema: memberSchema }]),
  ],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
