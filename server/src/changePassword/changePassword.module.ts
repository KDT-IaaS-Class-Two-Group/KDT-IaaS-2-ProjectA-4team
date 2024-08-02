import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import memberSchema from '@db/members/schema/member.schema';
import { PasswordService } from './changePassword.service';
import { PasswordController } from './changePassword.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Member', schema: memberSchema }]),
  ],
  providers: [PasswordService],
  controllers: [PasswordController],
})
export class PasswordModule {}
