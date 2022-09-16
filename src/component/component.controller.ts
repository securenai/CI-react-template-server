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
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtRefreshAuthGuard } from '../auth/jwt-rf-auth.guard';
import { ComponentService } from './component.service';
import jwt_decode from 'jwt-decode';

@Controller('api/component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: any, @Res() response: any) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded: any = jwt_decode(token);
    if (decoded && decoded.rf) {
      response.status(HttpStatus.UNAUTHORIZED).send({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'unauthorized',
      });
    } else {
      const result = await this.componentService.findAll();
      response.send(result);
    }
  }
}
