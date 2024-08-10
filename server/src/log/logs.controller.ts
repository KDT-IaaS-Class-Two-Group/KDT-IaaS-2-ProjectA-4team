import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UserLogService } from './userlog.service';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('log')
export class LogsController {
  constructor(private readonly userLogService: UserLogService) {}

  //로그인 로그
  @Post('login')
  async login(@Req() req: Request) {
    const token = req.cookies['token'];
    //토큰검사하여 id 추출
    //로그생성
  }

  //로그아웃 로그
  @Post('logout')
  async logout() {}
  //사용자 구매 로그
  @Post('purchase')
  async purchase() {}
  //재고 추가 로그
  @Post('addStock')
  async addStock() {}
  //재고 폐기 로그
  @Post('delStock')
  async delStock() {}
  //메뉴 추가 로그
  @Post('addMenu')
  async addMenu() {}
}
