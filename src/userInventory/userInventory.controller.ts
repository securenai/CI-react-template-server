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
import { UserInventoryService } from './userInventory.service';

@Controller('api/userInventory')
export class UserInventoryController {
  constructor(private readonly userInventoryService: UserInventoryService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    console.log('123');
    // const { limit, offset } = paginationQuery;
    return this.userInventoryService.findAll();
  }

  @Get(':owner')
  find(@Param('owner') owner: string) {
    return this.userInventoryService.findAllByOwner(owner);
  }
  // @Get('/api/:name')
  // find(@Param('name') name: string) {
  //   return this.userService.findOneByName(name);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userInventoryService.findOneById(id);
  }
}
