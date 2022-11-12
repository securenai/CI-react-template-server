import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
// import { UserDto } from './dto/tableData.dto';
import { TableData } from '../schemas/tableData.schema';

@Injectable()
export class TableDataService {
  constructor(
    @InjectModel(TableData.name)
    private readonly tableDataModel: Model<TableData>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    const count = this.tableDataModel.countDocuments();
    const result = this.tableDataModel.find().skip(offset).limit(limit).exec();
    return { result, count };
  }
  // async findByStashId(stashId: string) {
  //   // console.log(stashId);
  //   const tableData = await this.tableDataModel.find({ stashId: stashId }).exec();
  //   // console.log(tableData);
  //   if (!tableData) {
  //     throw new NotFoundException(`User #${stashId} not found`);
  //   }
  //   return tableData;
  // }

  // async findOneById(id: string) {
  //   // console.log(id);
  //   const user = await this.tableDataModel.findOne({ _id: id }).exec();
  //   if (!user) {
  //     throw new NotFoundException(`User #${id} not found`);
  //   }
  //   return user;
  // }

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
