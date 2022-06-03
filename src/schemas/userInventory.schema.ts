import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserInventory extends Document {
  @Prop()
  name: string;
  @Prop()
  type: string;
  @Prop()
  owner: string;
  @Prop()
  createDate: string;
  @Prop()
  public: boolean;
}

export const UserInventorySchema = SchemaFactory.createForClass(UserInventory);
