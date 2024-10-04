import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PostsService {
  // 1. Post Oluşturma
  async createPost(title: string, content: string, categoryId: number) {
    return await prisma.post.create({
      data: {
        title: title,
        content: content,
        categoryId: categoryId,
      },
    });
  }

  // 2. Tüm Postları Listeleme
  async findAllPosts() {
    return await prisma.post.findMany({
      include: {
        category: true,
        comments: true,
        postTags: true,
      },
    });
  }

  // 3. Post Görüntüleme
  async findPostById(id: number) {
    return await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        category: true,
        comments: true,
        postTags: true,
      },
    });
  }

  // 4. Post Güncelleme
  async updatePost(id: number, title: string, content: string, categoryId: number) {
    return await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
        categoryId: categoryId,
      },
    });
  }

  // 5. Post Silme
  async deletePost(id: number) {
    return await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
