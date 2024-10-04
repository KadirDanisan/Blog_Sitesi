import { Module } from '@nestjs/common';
import { CommentService } from '../service/comment.service';
import { CommentController } from '../controllers/comment.controller';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}