import { Controller, Get, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from './user.service';

@Controller('user')

export class UserController {
  constructor(private readonly userService: UserService) {}

  @Cron(CronExpression.EVERY_5_MINUTES)  
  async users(){
    await this.userService.createUser();
  }  
}
  


