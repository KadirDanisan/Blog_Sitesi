import { Module } from '@nestjs/common';
import { CommentService } from '../service/comment.service';
import { CommentController } from '../controllers/comment.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [PrismaModule],
})
export class CommentModule {}