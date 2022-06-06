import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTokenDto } from './create-token.dto';
import { UpdateTokenDto } from './update-token.dto';
import { Token } from '../schemas/token.schema';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private readonly tokenModel: Model<Token>,
  ) {}

  findAll() {
    return this.tokenModel.find().exec();
  }

  async findOne(id: string) {
    const token = await this.tokenModel.findOne({ _id: id }).exec();
    if (!token) {
      throw new NotFoundException(`Token #${id} not found`);
    }
    return token;
  }

  create(createTokenDto: CreateTokenDto) {
    const token = new this.tokenModel(createTokenDto);
    return token.save();
  }

  async update(id: string, updateTokenDto: UpdateTokenDto) {
    const existingToken = await this.tokenModel
      .findOneAndUpdate({ _id: id }, { $set: updateTokenDto }, { new: true })
      .exec();

    if (!existingToken) {
      throw new NotFoundException(`Token #${id} not found`);
    }
    return existingToken;
  }

  async remove(id: string) {
    const token = await this.findOne(id);
    return token.remove();
  }
}
