import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRefreshService } from './auth.rf.service';

@Injectable()
export class LocalRefreshStrategy extends PassportStrategy(Strategy) {
  constructor(private authRefreshService: AuthRefreshService) {
    super();
  }

  async validate(name: string, password: string): Promise<any> {
    // console.log('vvv', name + password);
    const user = await this.authRefreshService.validateUser(name, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
