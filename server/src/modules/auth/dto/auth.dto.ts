import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'sustainabilityhighway@gmail.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'password123' })
    @IsString()
    @MinLength(6)
    password: string;
}

export class RegisterDto extends LoginDto {
    @ApiProperty({ example: 'Admin User' })
    @IsString()
    name: string;
}
