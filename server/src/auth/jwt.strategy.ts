import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret_key', // 비밀 키
    });
  }

  async validate(payload: any) {
    if (!payload || !payload.username) {
      throw new UnauthorizedException();
    }
    return { email: payload.email, roleID: payload.roleID };
  }
}
