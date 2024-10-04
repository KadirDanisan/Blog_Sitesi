import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()  // Decorator doğru yerde kullanılmalı
export class CategoriesService {
  private prisma = new PrismaClient();

  // 1. Kategori Oluşturma (POST /categories)
  async createCategory(name: string) {
    return await this.prisma.category.create({
      data: {
        name: name,
      },
    });
  }

  // 2. Kategori Listeleme (GET /categories)
  async findAllCategory() {
    return await this.prisma.category.findMany();
  }

  // 3. Kategori Görüntüleme (GET /categories/:id)
  async findCategoryById(id: number) {
    return await this.prisma.category.findUnique({
      where: {
        id: id,
      },
      include: {
        posts: true,
      },
    });
  }

  // 4. Kategori Güncelleme (PATCH /categories/:id)
  async updateCategory(id: number, newName: string) {
    return await this.prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name: newName,
      },
    });
  }

  // 5. Kategori Silme (DELETE /categories/:id)
  async deleteCategory(id: number) {
    return await this.prisma.category.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
