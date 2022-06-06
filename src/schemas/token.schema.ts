import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Token extends Document {
  @Prop()
  userName: string;
  @Prop()
  accessToken: string;
  @Prop()
  refreshToken: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
