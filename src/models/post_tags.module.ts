import { Module } from '@nestjs/common';
import { PostTagsController } from '../controllers/post_tags.controller';
import { PostTagsService } from '../service/post_tags.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PostTagsController],
  providers: [PostTagsService],
  imports: [PrismaModule],
})
export class PostTagsModule {}
