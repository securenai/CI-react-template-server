import { Module } from '@nestjs/common';
import { UserInventoryService } from './userInventory.service';
import { UserInventoryController } from './userInventory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserInventory,
  UserInventorySchema,
} from '../schemas/userInventory.schema';

@Module({
  controllers: [UserInventoryController],
  providers: [UserInventoryService],
  exports: [UserInventoryService],
  imports: [
    MongooseModule.forFeature([
      {
        name: UserInventory.name,
        schema: UserInventorySchema,
      },
    ]),
  ],
})
export class UserInventoryModule {}
