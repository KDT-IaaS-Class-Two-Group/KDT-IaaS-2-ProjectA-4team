import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IMember from '@db/members/member.interface';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Types } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Member') private readonly memberModel: Model<IMember>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
  ): Promise<{ user: IMember; _id: Types.ObjectId } | null> {
    const user = await this.memberModel.findOne({ email }).exec();

    if (!user) {
      return null;
    }

    // _id 값을 포함한 객체를 반환
    return {
      user,
      _id: user._id,
    };
  }
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

    console.log('토큰 출력 직전');
    return { token, cookieOptions };
  }

  /**
   * @crystal23733 24.08.05
   * @param name
   * @returns 이메일 확인
   */
  async getUserInfo(name: string): Promise<IMember | null> {
    return this.memberModel.findOne({ name }).exec();
  }

  public verifyToken(token: string): any {
    return this.jwtService.verify(token);
  }

  /**
   * * 비밀번호 변경
   * @crystal23733 24.08.06
   * @param name
   * @param oldPassword
   * @param newPassword
   * @returns 상태
   */
  async changePassword(
    name: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<any> {
    const member = await this.memberModel.findOne({ name });
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
      if (!token) {
        return null;
      }

      const decoded = this.jwtService.verify(token);
      return decoded.name;
    } catch (error) {
      console.error('Token decoding failed:', error);
      return null;
    }
  }

  //토큰이 들어오면 사용자 고유 id를 리턴
  async findMemberIdByToken(request: Request): Promise<Types.ObjectId | null> {
    try {
      const token = request.cookies['token'];
      const decoded = this.jwtService.verify(token);
      const email = decoded.email;
      console.log(email);

      const user = await this.memberModel.findOne({ email }).exec();
      console.log(user);
      if (!user) {
        return null;
      } else {
        return user._id;
      }
    } catch (error) {
      console.error('Error in findMemberIdByToken:', error);
      throw new Error('Invalid token or user not found');
    }
  }
}
