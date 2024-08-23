import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IMember from '@db/members/member.interface';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { TokenUtils } from '../utils/token.utils';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Member') private readonly memberModel: Model<IMember>,
    private readonly jwtService: JwtService,
    private readonly tokenUtils: TokenUtils,
  ) {}

  /**
   * * 유효성검사
   * @param email
   * @param password
   * @returns user
   */
  async validateUser(email: string, password: string): Promise<IMember | null> {
    const user = await this.memberModel.findOne({ email }).exec();
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  /**
   * * 회원가입 시 진행되는 사용자 생성
   * @param createUserDto
   * @returns 사용자 데이터 저장
   */
  async createUser(createUserDto: {
    username: string;
    email: string;
    password: string;
  }): Promise<IMember> {
    const { username, email, password } = createUserDto;

    const newMember = new this.memberModel({
      name: username,
      email,
      password,
      roleID: 0,
    });

    return await newMember.save();
  }

  /**
   * @moonhr 24.08.02
   * @param name
   * @param roleId
   * @returns jwt토큰, 쿠키설정
   */
  async generateToken(
    name: string,
    roleID: number,
    email: string,
  ): Promise<{ token: string; cookieOptions: any }> {
    const payload = { name: name, roleID, email };
    const token = this.jwtService.sign(payload);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' || false,
      maxAge: 3600000,
    };

    return { token, cookieOptions };
  }

  /**
   * @crystal23733
   * @date 24.08.05
   * @description 주어진 이메일을 사용하여 사용자의 정보를 확인합니다.
   * @param email 사용자의 이메일 주소
   * @returns {Promise<IMember | null>} 이메일이 일치하는 사용자 정보를 반환합니다.
   * 사용자 정보가 존재하지 않으면 null을 반환합니다.
   */
  async getUserInfo(email: string): Promise<IMember | null> {
    return this.memberModel.findOne({ email }).exec();
  }

  /**
   * @crystal23733
   * @date 24.08.05
   * @description JWT 토큰을 검증합니다.
   * @param token 검증할 JWT 토큰
   * @returns {any} 검증된 토큰의 페이로드를 반환합니다.
   */
  public verifyToken(token: string): any {
    return this.jwtService.verify(token);
  }

  /**
   * @crystal23733
   * @date 24.08.06
   * @description 사용자의 비밀번호를 변경합니다.
   * @param email 사용자의 이메일 주소
   * @param oldPassword 현재 비밀번호
   * @param newPassword 새 비밀번호
   * @returns {Promise<any>} 비밀번호 변경 상태를 나타내는 메시지를 반환합니다.
   * @throws {NotFoundException} 사용자를 찾을 수 없는 경우
   * @throws {Error} 이전 비밀번호가 일치하지 않는 경우
   */
  async changePassword(
    email: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<any> {
    const member = await this.memberModel.findOne({ email });
    if (!member) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }
    if (member.password !== oldPassword) {
      throw new Error('이전 비밀번호가 일치하지 않습니다.');
    }
    member.password = newPassword;
    await member.save();
    return { message: '비밀번호가 성공적으로 변경되었습니다.' };
  }

  /**
   * @moonhr 24.08.08
   * * 토큰에서 사용자의 이름을 찾아 리턴한다.
   * @param cookie
   * @returns username
   */
  async findUserNameToToken(request: Request): Promise<string | null> {
    try {
      const token = request.cookies['token'];
      return await this.tokenUtils.findNameByToken(token, this.memberModel);
    } catch (error) {
      return null;
    }
  }

  /**
   * @moonhr 24.08.09
   * * 토큰에서 사용자이메일 반환
   * @param request
   * @returns user.email
   */
  async findUserEmailToToken(request: Request): Promise<string | null> {
    try {
      const token = request.cookies['token'];
      if (!token) {
        return null;
      }

      const decoded = this.jwtService.verify(token);
      return decoded.email;
    } catch (error) {
      return null;
    }
  }
}
