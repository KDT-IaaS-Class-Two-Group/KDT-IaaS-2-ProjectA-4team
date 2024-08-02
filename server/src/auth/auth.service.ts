// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IMember from '@db/members/member.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Member') private readonly memberModel: Model<IMember>,
  ) {}

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
}
