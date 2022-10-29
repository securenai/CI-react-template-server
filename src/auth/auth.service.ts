import { HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthRefreshService } from './auth.rf.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private authRefreshService: AuthRefreshService,
  ) {}

  async validateUser(name: string, password: string): Promise<any> {
    // console.log('222', name + password);
    const user = await this.userService.findOneByName(name);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('user', user);
    console.log('username', user.name);
    const payload = { username: user.name, sub: user._id, rf: false };
    const payloadRefresh = { username: user.name, sub: user._id, rf: true };
    // const refreshTokenData = await this.authRefreshService.generateRefreshToken(
    //   user,
    // );
    // console.log('------------------');
    // console.log(refreshTokenData);
    // console.log('------------------');
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payloadRefresh, {
      expiresIn: '300s',
    });
    // this.tokenService.create({ name: user.name, accessToken, refreshToken });
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      // refresh_token: refreshTokenData.refresh_token,
      expiresIn: parseInt(process.env.JWT_EXPIRES_IN),
      refreshExpiresIn: parseInt(process.env.JWT_REFRESH_EXPIRES_IN),
      // refreshExpiresIn: refreshTokenData.refreshExpiresIn,
      userInfo: user,
      success: true,
      status: HttpStatus.OK,
    };
  }

  async renewCredentials(user: any) {
    // return
  }
}
