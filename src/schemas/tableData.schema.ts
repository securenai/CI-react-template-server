import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TableData extends Document {
  @Prop()
  conference: string;
  @Prop()
  division: string;
  @Prop()
  created: string;
  @Prop()
  team: string;
  @Prop()
  news: string;
  @Prop([String])
  players: string[];
  @Prop()
  coach: string;
}

export const TableDataSchema = SchemaFactory.createForClass(TableData);
