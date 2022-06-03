import { Module } from '@nestjs/common';
import { MemoService } from './memo.service';
import { MemoController } from './memo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Memo, MemoSchema } from '../schemas/memo.schema';

@Module({
  controllers: [MemoController],
  providers: [MemoService],
  exports: [MemoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Memo.name,
        schema: MemoSchema,
      },
    ]),
  ],
})
export class MemoModule {}
