import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'; // 데이터베이스 엔티티

@Controller('signup')
export class AuthController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Post()
  async signUp(
    @Body() body: { username: string; email: string; password: string },
  ) {
    try {
      const newUser = this.userRepository.create(body);
      await this.userRepository.save(newUser);

      return {
        message: '회원 가입이 완료되었습니다.',
        data: body,
      };
    } catch (error) {
      console.error('회원 가입 오류:', error);
      throw new Error('회원 가입 처리 중 오류가 발생했습니다.');
    }
  }
}
