
import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // Yorum Oluşturma
  @Post()
  async create(@Body() body: { content: string; commenter: string; postId: number }) {
    return await this.commentService.createComment(body.content, body.commenter, body.postId);
  }

  // Yorumları Listeleme
  @Get()
  async findAll() {
    const comments =  await this.commentService.findAllComments();
    return {comments};
  }

  // Yorum Görüntüleme
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const comment = await this.commentService.findCommentById(id);
    return {comment}
  }

  // Yorum Güncelleme
  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: { content: string; commenter: string; postId: number }) {
    return await this.commentService.updateComment(id, body.content, body.commenter, body.postId);
  }
}
