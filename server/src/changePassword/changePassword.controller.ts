import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PasswordService } from './changePassword.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@Controller()
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post('changePassword')
  async changePassword(
    @Body('name') name: string,
    @Body('password') oldPassword: string,
    @Body('changePassword') newPassword: string,
  ): Promise<any> {
    return this.passwordService.changePassword(name, oldPassword, newPassword);
  }
}
