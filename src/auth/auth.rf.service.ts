import { HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthRefreshService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string): Promise<any> {
    console.log('222', name + password);
    const user = await this.userService.findOneByName(name);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async generateRefreshToken(user: any) {
    console.log(user);
    const payload = { username: user.name, sub: user._id, rf: true };
    return {
      refresh_token: this.jwtService.sign(payload),
      refreshExpiresIn: parseInt(process.env.JWT_REFRESH_EXPIRES_IN),
      success: true,
      status: HttpStatus.OK,
    };
  }
}
