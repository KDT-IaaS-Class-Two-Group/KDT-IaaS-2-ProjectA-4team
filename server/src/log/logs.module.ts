import { UserLogService } from './userlog.service';
import { UserLog, UserLogSchema } from '../schemas/userLog.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserLog.name, schema: UserLogSchema }]),
  ],
  providers: [UserLogService],
  exports: [UserLogService],
})
export class LogsModule {}
