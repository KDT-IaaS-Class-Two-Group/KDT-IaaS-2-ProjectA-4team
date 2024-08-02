import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
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

  @Get(':id')
  async findById(@Param('id') id: string): Promise<IMember> {
    console.log(`GET /api/members/${id} request received`);
    return this.membersService.findById(id);
  }

  @Post()
  async create(@Body() memberData: any): Promise<{ message: string }> {
    console.log('POST /api/members request received with data:', memberData);
    return { message: 'POST /api/members request received' };
  }

  @Put(':id')
  async updateRole(
    @Param('id') id: string,
    @Body() updateData: { roleID: number },
  ): Promise<IMember> {
    console.log(
      `PUT /api/members/${id} request received with data:`,
      updateData,
    );
    return this.membersService.updateRole(id, updateData.roleID);
  }
}
