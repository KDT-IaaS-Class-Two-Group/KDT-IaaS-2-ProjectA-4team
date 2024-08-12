import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';

interface DecodedToken {
  email: string;
  name: string;
  roleID: string;
}

/**
 * @moonhr 24.08.10
 * * 토큰을 검증, 디코딩하여 사용자정보를 반환.
 */
@Injectable()
export class TokenUtils {
  constructor(private jwtService: JwtService) {}

  // 토큰을 검증하고 디코딩하여 사용자 정보를 반환하는 함수
  verifyAndDecodeToken(token: string): DecodedToken | null {
    try {
      const decoded = this.jwtService.verify<DecodedToken>(token);
      return decoded;
    } catch (error) {
      console.error('Error in verifyAndDecodeToken:', error);
      return null;
    }
  }

  // 토큰에서 사용자 ID를 추출하는 함수
  async findMemberIdByToken(
    token: string,
    memberModel: any,
  ): Promise<Types.ObjectId> {
    const decoded = this.verifyAndDecodeToken(token);
    if (!decoded) {
      throw new Error('Invalid token');
    }

    const user = await memberModel.findOne({ email: decoded.email }).exec();
    return user ? user._id : null;
  }

  // 토큰에서 사용자 name을 추출하는 함수
  async findNameByToken(
    token: string,
    memberModel: any,
  ): Promise<string | null> {
    const decoded = this.verifyAndDecodeToken(token);
    if (!decoded) {
      throw new Error('Invalid token');
    }

    const user = await memberModel.findOne({ email: decoded.email }).exec();
    return user ? user.name : null;
  }

  // 토큰에서 사용자 권한을 추출하는 함수
  async findRoleIdByToken(
    token: string,
    memberModel: any,
  ): Promise<string | null> {
    const decoded = this.verifyAndDecodeToken(token);
    if (!decoded) {
      throw new Error('Invalid token');
    }

    const user = await memberModel.findOne({ email: decoded.email }).exec();
    return user ? user.roleID : null;
  }
}
