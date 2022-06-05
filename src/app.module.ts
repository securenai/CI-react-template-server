import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UserInventoryModule } from './userInventory/userInventory.module';
import { MemoModule } from './memo/memo.module';
import { AuthModule } from './auth/auth.module';
import { ComponentModule } from './component/component.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    UserInventoryModule,
    MemoModule,
    AuthModule,
    ComponentModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRoot(process.env.ATLAS_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
