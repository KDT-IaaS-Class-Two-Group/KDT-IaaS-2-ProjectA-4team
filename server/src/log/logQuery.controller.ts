import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserLogService } from './userlog.service';
import IDateRange from './interface/dateRange.interface';

@UseGuards(JwtAuthGuard)
@Controller('logs')
export class LogQueryController {
  constructor(private readonly userLogService: UserLogService) {}

  @Post()
  async getAllLogs(@Body() dateRange: IDateRange) {
    const { startDate, endDate } = dateRange;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const logsData = await this.userLogService.getAllLogs(start, end);
    return logsData;
  }
}
