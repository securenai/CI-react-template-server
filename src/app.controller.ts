import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Res,
  Req,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import jwt_decode from 'jwt-decode';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  // @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req, @Res({ passthrough: true }) response: any) {
    const resp = await this.authService.login(req.user);
    // console.log('---------');
    // console.log(response);
    const secretData = {
      token: resp.access_token,
      refreshToken: resp.refresh_token,
    };
    response.cookie('auth-cookie', secretData);
    // console.log(response);
    return resp;
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    // console.log(req.cookies);
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/refresh')
  async getNewCredentials(
    @Request() req,
    @Res({ passthrough: true }) response: any,
  ) {
    console.log('req headers', req.headers);
    const incomingToken = req.headers.authorization.split(' ')[1];
    console.log('incomingToken', incomingToken);
    const decoded: any = jwt_decode(incomingToken);
    console.log('decoded', decoded);
    if (decoded && decoded.rf === false) {
      response.status(HttpStatus.UNAUTHORIZED).send({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'unauthorized',
      });
      return response;
    }
    // if (incomingToken === req.cookies['auth-cookie'].refreshToken) {
    const resp = await this.authService.login(req.user);
    const secretData = {
      token: resp.access_token,
      refreshToken: resp.refresh_token,
    };
    response.cookie('auth-cookie', secretData);
    return resp;
    // } else {
    //   return {
    //     success: false,
    //     status: HttpStatus.UNAUTHORIZED,
    //   };
    // }
  }
}
