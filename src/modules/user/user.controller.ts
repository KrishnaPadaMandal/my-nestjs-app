import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  create(@Body() body: CreateUserDto) {
    return this.service.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  findAll() {
    return this.service.findAll();
  }
}