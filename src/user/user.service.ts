import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { User } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  findAll() {
    return this.userModel.find().exec();
  }

  async findOneById(id: string) {
    const user = await this.userModel.findOne({ _id: id }).exec();
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async findOneByName(name: string) {
    console.log(name);
    const user = await this.userModel.findOne({ name: name }).exec();
    if (!user) {
      throw new NotFoundException(`User #${name} not found`);
    }
    return user.toObject();
  }

  // create(createCoffeeDto: CreateCoffeeDto) {
  //   const coffee = new this.coffeeModel(createCoffeeDto);
  //   return coffee.save();
  // }

  // async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
  //   const existingCoffee = await this.coffeeModel
  //     .findOneAndUpdate({ _id: id }, { $set: updateCoffeeDto }, { new: true })
  //     .exec();

  //   if (!existingCoffee) {
  //     throw new NotFoundException(`Coffee #${id} not found`);
  //   }
  //   return existingCoffee;
  // }

  // async remove(id: string) {
  //   const coffee = await this.findOne(id);
  //   return coffee.remove();
  // }
}
