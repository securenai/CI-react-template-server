import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { UserDto } from './dto/component.dto';
import { Component } from '../schemas/component.schema';

@Injectable()
export class ComponentService {
  constructor(
    @InjectModel(Component.name)
    private readonly componentModel: Model<Component>,
  ) {}

  findAll() {
    // console.log('findall');
    return this.componentModel.find().exec();
  }
}
