import { Module } from '@nestjs/common';
import { ComponentService } from './component.service';
import { ComponentController } from './component.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Component, ComponentSchema } from '../schemas/component.schema';

@Module({
  controllers: [ComponentController],
  providers: [ComponentService],
  exports: [ComponentService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Component.name,
        schema: ComponentSchema,
      },
    ]),
  ],
})
export class ComponentModule {}
