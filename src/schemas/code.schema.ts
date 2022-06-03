import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Code extends Document {
  @Prop()
  content: string;
  @Prop()
  createDate: string;
  @Prop()
  modifiedDate: string;
  @Prop()
  owner: string;
  @Prop()
  stashId: string;
  @Prop()
  topic: string;
}

export const CodeSchema = SchemaFactory.createForClass(Code);
