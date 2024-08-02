import { Controller, Post, Body } from '@nestjs/common';
import { PasswordService } from './changePassword.service';

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