import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async createUser(dto: CreateUserDto): Promise<CreateUserDto> {
        try {
            const existingUser = await this.userRepository.findOne({
                where: { email: dto.email },
                withDeleted: true
            });

            if(existingUser) {
                throw new ConflictException('User With this email already exists');
            }

            const user = this.userRepository.create(dto);
            const savedUser = await this.userRepository.save(user);

            return savedUser;
        } catch (error) {
            throw error
        }
    }

    async findAll() {
        try {
            const users = await this.userRepository.find();

            return users
        } catch (error) {
            throw error
        }
    }
}
