// src/auth/auth.controller.ts
import { Controller, Post, Body, Res, HttpStatus, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import IMember from '@db/members/member.interface';
import { Request, Response } from 'express';

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
      const user = await this.authService.validateUser(data.email);
      if (!user) {
        // 사용자가 존재하지 않으면 에러 반환
        res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ success: false, message: 'Invalid credentials' });
        return;
      }

      const roleID = user.roleID;

      const { token, cookieOptions } = await this.authService.generateToken(
        user.email,
        roleID,
      );

      res.cookie('token', token, cookieOptions);
      res.status(HttpStatus.OK).json({ success: true, token });
    } catch (error) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ success: false, message: 'Invalid credentials' });
    }
  }
  @Get('user-info')
  async getUserInfo(@Req() req:Request, @Res() res:Response){
    const token = req.cookies['token'];
    if(!token){
      res.status(HttpStatus.UNAUTHORIZED).json({success:false, message: '승인 되지 않음'});
      return;
    }
    try{
      const decoded = this.authService.verifyToken(token);
      const user = await this.authService.getUserInfo(decoded.email);
      if(!user){
        res.status(HttpStatus.UNAUTHORIZED).json({success: false, message: '승인 되지 않음'})
        return;
      }
      res.status(HttpStatus.OK).json({ success: true, user});
    } catch(error){
      res.status(HttpStatus.UNAUTHORIZED).json({ success: false, message: 'Invalid token' });
    }
  }
}
