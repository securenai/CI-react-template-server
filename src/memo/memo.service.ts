import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { UserDto } from './dto/memo.dto';
import { Memo } from '../schemas/memo.schema';

@Injectable()
export class MemoService {
  constructor(
    @InjectModel(Memo.name)
    private readonly memoModel: Model<Memo>,
  ) {}

  findAll() {
    // console.log('findall');
    return this.memoModel.find().exec();
  }

  async findByStashId(stashId: string) {
    // console.log(stashId);
    const memo = await this.memoModel.find({ stashId: stashId }).exec();
    // console.log(memo);
    if (!memo) {
      throw new NotFoundException(`User #${stashId} not found`);
    }
    return memo;
  }

  async findOneById(id: string) {
    // console.log(id);
    const user = await this.memoModel.findOne({ _id: id }).exec();
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
