// src/auth/auth.controller.ts
import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import IMember from '@db/members/member.interface';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body() body: { username: string; email: string; password: string },
  ) {
    try {
      const newUser = await this.authService.createUser(body);
      return {
        message: '회원 가입이 완료되었습니다.',
        data: newUser,
      };
    } catch (error) {
      console.error('회원 가입 오류:', error);
      throw new Error('회원 가입 처리 중 오류가 발생했습니다.');
    }
  }

  @Post('login')
  async login(@Body() data: IMember, @Res() res: Response): Promise<void> {
    // 사용자 검증 및 로그인 처리
    try {
      const { token, cookieOptions } = await this.authService.generateToken(
        data.email,
        data.roleID,
      );

      if (!token) {
        throw new Error('Invalid credentials');
      }

      res.cookie('token', token, cookieOptions);
      res.status(HttpStatus.OK).json({ success: true, token });
    } catch (error) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ success: false, message: 'Invalid credentials' });
    }
  }
}
