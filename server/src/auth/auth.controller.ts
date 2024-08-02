// src/auth/auth.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('signup')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
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
