import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MembersService } from './members.service';
import IMember from '@db/members/member.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@Controller('api/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  async findAll(): Promise<IMember[]> {
    return this.membersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<IMember> {
    return this.membersService.findById(id);
  }

  @Post()
  async create(@Body() memberData: any): Promise<{ message: string }> {
    return { message: 'POST /api/members request received' };
  }

  @Put(':id')
  async updateRole(
    @Param('id') id: string,
    @Body() updateData: { roleID: number },
  ): Promise<IMember> {
    return this.membersService.updateRole(id, updateData.roleID);
  }
}
