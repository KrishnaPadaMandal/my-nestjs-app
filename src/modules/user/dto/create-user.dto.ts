import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Krishna' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'krishna@gmail.com' })
  @IsEmail()
  email: string;
}