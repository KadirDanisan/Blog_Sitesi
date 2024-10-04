import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PostTagsService {
  // 1. Post'a Tag Ekleme
  async addTagToPost(postId: number, tagId: number) {
    return await prisma.postTag.create({
      data: {
        postId: postId,
        tagId: tagId,
      },
    });
  }

  // 2. Post'tan Tag Silme
  async deleteTagFromPost(postId: number, tagId: number) {
    return await prisma.postTag.delete({
      where: {
        postId_tagId: {
          postId: postId,
          tagId: tagId,
        },
      },
    });
  }
}
