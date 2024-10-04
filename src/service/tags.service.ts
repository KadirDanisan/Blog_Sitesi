import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TagsService {
  // 1. Tag Oluşturma
  async createTags(name: string) {
    return await prisma.tag.create({
      data: {
        name: name,
      },
    });
  }

  // 2. Tüm Tagları Listeleme
  async findAllTags() {
    return await prisma.tag.findMany({
      include: {
        postTags: true,
      },
    });
  }

  // 3. Tag Görüntüleme
  async findTagsById(id: number) {
    return await prisma.tag.findUnique({
      where: {
        id: id,
      },
      include: {
        postTags: true,
      },
    });
  }

  // 4. Tag Güncelleme
  async updateTags(id: number, name: string) {
    return await prisma.tag.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
  }

  // 5. Tag Silme (isteğe bağlı)
  async deleteTags(id: number) {
    return await prisma.tag.delete({
      where: {
        id: id,
      },
    });
  }
}
