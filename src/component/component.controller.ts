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
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtRefreshAuthGuard } from '../auth/jwt-rf-auth.guard';
import { ComponentService } from './component.service';

@Controller('api/component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @UseGuards(JwtRefreshAuthGuard)
  @Get()
  findAll(@Req() req: any) {
    console.log(req.cookies);
    return this.componentService.findAll();
  }
}
