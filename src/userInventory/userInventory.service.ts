import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { UserDto } from './dto/userInventory.dto';
import { UserInventory } from '../schemas/userInventory.schema';

@Injectable()
export class UserInventoryService {
  constructor(
    @InjectModel(UserInventory.name)
    private readonly userInventoryModel: Model<UserInventory>,
  ) {}

  findAll() {
    // console.log('findall');
    return this.userInventoryModel.find().exec();
  }

  async findAllByOwner(owner: string) {
    // console.log(owner);
    const userInventory = await this.userInventoryModel
      .find({ owner: owner })
      .exec();
    // console.log(userInventory);
    if (!userInventory) {
      throw new NotFoundException(`User #${owner} not found`);
    }
    return userInventory;
  }

  async findOneById(id: string) {
    // console.log(id);
    const user = await this.userInventoryModel.findOne({ _id: id }).exec();
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
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
