
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CommentService {
  private prisma = new PrismaClient();

  async createComment(content: string, commenter: string, postId: number) {
    return await this.prisma.comment.create({
      data: {
        content: content,
        commenter: commenter,
        postId: postId,
      },
    });
  }

  async findAllComments() {
    return await this.prisma.comment.findMany({
      include: {
        post: true,
      },
    });
  }

  async findCommentById(id: number) {
    return await this.prisma.comment.findUnique({
      where: {
        id: id,
      },
      include: {
        post: true,
      },
    });
  }

  async updateComment(id: number, content: string, commenter: string, postId: number) {
    return await this.prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        content: content,
        commenter: commenter,
        postId: postId,
      },
    });
  }
}
