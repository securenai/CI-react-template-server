import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Component extends Document {
  @Prop()
  name: string;
  @Prop()
  desc: string;
  @Prop()
  completion: string;
  @Prop()
  createdDate: string;
}

export const ComponentSchema = SchemaFactory.createForClass(Component);
