import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get()
  async users(){
    await this.userService.createUser();
  }
  

  @Post()
  create(@Body() createUserDto: Partial<CreateUserDto>) {    
    return this.userService.create(createUserDto);
  }

  
}
