import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private httpService: HttpService,
    
  ) {}

  async create(users) {
    users.address = { id: users.address}
    users.company = { id: users.company }
    return await this.usersRepository.save(this.usersRepository.create(users))
  }

  async createUser(){
    this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe(async res => {
      for (let user of res.data) {
        await this.usersRepository.save({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,            
            lat: user.address.geo.lat,
            lng: user.address.geo.lng,            
          },
          phone: user.phone,
          website: user.website,
          company: {
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs,
          }      
        })
      }
    })
  }  
}

