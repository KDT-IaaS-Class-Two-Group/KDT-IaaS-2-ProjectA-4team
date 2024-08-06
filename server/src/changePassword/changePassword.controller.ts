import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { PasswordService } from './changePassword.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request, Response } from 'express';
@UseGuards(JwtAuthGuard)
@Controller()
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post('changePassword')
  async changePassword(
    @Req() req: Request,
    @Body('password') oldPassword: string,
    @Body('changePassword') newPassword: string,
    @Res() res: Response,
  ): Promise<any> {
    const token = req.cookies['token'];
    if (!token) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: '인증되지 않았습니다.' });
      return;
    }
    try {
      const decoded = this.passwordService.verifyToken(token);
      const userEmail = decoded.email;
      await this.passwordService.changePassword(
        userEmail,
        oldPassword,
        newPassword,
      );
      res
        .status(HttpStatus.OK)
        .json({ message: '비밀번호가 성공적으로 변경되었습니다.' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
      }
    }
  }
}
