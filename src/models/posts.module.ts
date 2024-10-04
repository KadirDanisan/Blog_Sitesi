import { Module } from '@nestjs/common';
import { PostsController } from '../controllers/post.controller';
import { PostsService } from '../service/posts.service.js';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [PrismaModule],
})
export class PostsModule {}