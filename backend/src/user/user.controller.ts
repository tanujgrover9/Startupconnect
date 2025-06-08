import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async createUser(@Body() dto: CreateUserDto) {
        return await this.userService.createUser(dto);
    }

    @Get()
    async getUsers() {
        return await this.userService.findAll();
    }

}
