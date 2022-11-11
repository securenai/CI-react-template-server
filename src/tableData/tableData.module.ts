import { Module } from '@nestjs/common';
import { TableDataService } from './tableData.service';
import { TableDataController } from './tableData.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TableData, TableDataSchema } from '../schemas/tableData.schema';

@Module({
  controllers: [TableDataController],
  providers: [TableDataService],
  exports: [TableDataService],
  imports: [
    MongooseModule.forFeature([
      {
        name: TableData.name,
        schema: TableDataSchema,
      },
    ]),
  ],
})
export class TableDataModule {}
