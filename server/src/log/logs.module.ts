import { UserLogService } from './userlog.service';
import { UserLog, UserLogSchema } from '../schemas/userLog.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsController } from './logs.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserLog.name, schema: UserLogSchema }]),
    LogsController,
  ],
  providers: [UserLogService],
  exports: [UserLogService],
})
export class LogsModule {}
