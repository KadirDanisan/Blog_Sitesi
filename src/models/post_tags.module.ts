import { Module } from '@nestjs/common';
import { PostTagsController } from '../controllers/post_tags.controller';
import { PostTagsService } from '../service/post_tags.service';

@Module({
  controllers: [PostTagsController],
  providers: [PostTagsService],
})
export class PostTagsModule {}
