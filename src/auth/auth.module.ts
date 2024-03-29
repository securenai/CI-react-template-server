import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRefreshService } from './auth.rf.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

// const t = `${process.env.JWT_EXPIRES_IN}`;
// console.log(jwtConstants.secret);
// console.log(t);

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: jwtConstants?.jwt_expireIn === undefined ? '3600s' : '3600s',
      },
    }),
  ],
  providers: [AuthService, AuthRefreshService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
