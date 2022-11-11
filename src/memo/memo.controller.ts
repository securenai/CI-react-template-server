import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MemoService } from './memo.service';

@Controller('api/memo')
export class MemoController {
  constructor(private readonly memoService: MemoService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // console.log('123');
    // const { limit, offset } = paginationQuery;
    // return this.memoService.findAll();
  }

  @Get(':stashId')
  find(@Param('stashId') stashId: string) {
    // return this.memoService.findByStashId(stashId);
  }
  // @Get('/api/:name')
  // find(@Param('name') name: string) {
  //   return this.userService.findOneByName(name);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.memoService.findOneById(id);
  }
}
