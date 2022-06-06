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
import { TokenService } from './token.service';
import { CreateTokenDto } from './create-token.dto';
import { UpdateTokenDto } from './update-token.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.tokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tokenService.findOne(id);
  }

  @Post()
  create(@Body() createTokenDto: CreateTokenDto) {
    return this.tokenService.create(createTokenDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTokenDto: UpdateTokenDto) {
    return this.tokenService.update(id, updateTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokenService.remove(id);
  }
}
