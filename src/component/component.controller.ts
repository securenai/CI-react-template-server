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

@Controller('api/component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: any, @Res() response: any) {
    console.log(req.headers.authorization.split(' ')[1]);
    // console.log(req.cookies['auth-cookie'].token);
    if (!req.headers.authorization.split(' ')[1]) {
      response.status(HttpStatus.UNAUTHORIZED).send({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'unauthorized',
      });
    } else {
      const result = await this.componentService.findAll();
      // console.log(result);
      response.send(result);
    }
  }
}
