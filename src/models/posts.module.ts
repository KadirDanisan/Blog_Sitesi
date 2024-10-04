import { Module } from '@nestjs/common';
import { PostsController } from '../controllers/post.controller';
import { PostsService } from '../service/posts.service.js';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}