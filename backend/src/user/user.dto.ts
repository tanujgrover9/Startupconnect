import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @Transform(({value}) => value.toLowerCase().trim())
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Transform(({value}) => value.trim())
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {};