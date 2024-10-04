import { Module } from '@nestjs/common';
import { TagsController } from '../controllers/tags.controller';
import { TagsService } from '../service/tags.service';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
