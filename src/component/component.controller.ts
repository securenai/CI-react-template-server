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
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ComponentService } from './component.service';

@Controller('api/component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() paginationQuery) {
    console.log('123');
    // const { limit, offset } = paginationQuery;
    return this.componentService.findAll();
  }
}
