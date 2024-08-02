import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IMember from '@db/members/member.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Member') private readonly memberModel: Model<IMember>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string): Promise<IMember | null> {
    const user = await this.memberModel.findOne({ email }).exec();
    return user;
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
   * @param email
   * @param roleId
   * @returns jwt토큰, 쿠키설정
   */
  async generateToken(
    email: string,
    roleID: number,
  ): Promise<{ token: string; cookieOptions: any }> {
    const payload = { email, roleID };
    const token = this.jwtService.sign(payload);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' || false,
      maxAge: 3600000,
    };
    console.log('토큰 출력 직전');
    return { token, cookieOptions };
  }
}
