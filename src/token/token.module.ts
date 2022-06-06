import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Token, TokenSchema } from '../schemas/token.schema';

@Module({
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Token.name,
        schema: TokenSchema,
      },
    ]),
  ],
})
export class TokenModule {}
