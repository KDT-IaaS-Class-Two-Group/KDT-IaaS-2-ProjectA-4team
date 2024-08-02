// src/members/members.controller.ts

import { Controller, Get } from '@nestjs/common';
import { MembersService } from './members.service';
import IMember from '@db/members/member.interface';

@Controller('api/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  async findAll(): Promise<IMember[]> {
    console.log('GET /api/members request received');
    return this.membersService.findAll();
  }
}
