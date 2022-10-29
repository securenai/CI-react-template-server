import { Module } from '@nestjs/common';
import { AuthRefreshService } from './auth.rf.service';
import { LocalRefreshStrategy } from './local.rf.strategy';
import { JwtRefreshStrategy } from './jwt.rf.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.refresh_secret,
      signOptions: { expiresIn: '300s' },
    }),
  ],
  providers: [AuthRefreshService, LocalRefreshStrategy, JwtRefreshStrategy],
  exports: [AuthRefreshService],
})
export class AuthRefreshModule {}
