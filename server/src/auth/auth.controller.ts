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
}
