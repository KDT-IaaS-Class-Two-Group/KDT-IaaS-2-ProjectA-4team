import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
// import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    console.log('JwtStrategy initialized');
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req.cookies?.token, // 쿠키에서 JWT 추출
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'), // 비밀 키
    });
  }

  async validate(payload: any) {
    if (!payload || !payload.name) {
      throw new UnauthorizedException();
    }
    return { name: payload.name, roleID: payload.roleID, email: payload.email };
  }
}
