import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Memo extends Document {
  @Prop()
  owner: string;
  @Prop()
  createDate: string;
  @Prop()
  modifiedDate: string;
  @Prop()
  stashId: string;
  @Prop()
  title: string;
  @Prop()
  link: string;
}

export const MemoSchema = SchemaFactory.createForClass(Memo);
