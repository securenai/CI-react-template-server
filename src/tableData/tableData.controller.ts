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
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { TableDataService } from './tableData.service';

@Controller('api/tableData')
export class TableDataController {
  constructor(private readonly tableDataService: TableDataService) {}

  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    // console.log('123');
    const result = await this.tableDataService.findAll(paginationQuery);
    const count = await this.tableDataService.findCount();
    // console.log(result, count);
    return { result, count };
  }

  // @Get(':stashId')
  // find(@Param('stashId') stashId: string) {
  //   return this.tableDataService.findByStashId(stashId);
  // }
  // @Get('/api/:name')
  // find(@Param('name') name: string) {
  //   return this.userService.findOneByName(name);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tableDataService.findOneById(id);
  // }
}
