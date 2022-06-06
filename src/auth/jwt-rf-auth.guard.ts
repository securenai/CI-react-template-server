import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtRefreshStrategy } from './jwt.rf.strategy';

@Injectable()
export class JwtRefreshAuthGuard extends AuthGuard(JwtRefreshStrategy.key) {}
