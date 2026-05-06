import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  create(data: any) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find();
  }
}