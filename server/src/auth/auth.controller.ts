// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import IMember from '@db/members/member.interface';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: IMember): Promise<{ access_token: string }> {
    // 사용자 검증 및 로그인 처리
    const userToken = await this.authService.generateToken(
      data.email,
      data.roleID,
    );

    if (!userToken) {
      throw new Error('Invalid credentials');
    }

    return userToken;
  }

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
}
