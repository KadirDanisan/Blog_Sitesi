import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CategoriesService } from '../service/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // Kategori Oluşturma
  @Post()
  async create(@Body('name') name: string) {
    return await this.categoriesService.createCategory(name);
  }

  // Kategori Listeleme
  @Get()
  async findAll() {
    return await this.categoriesService.findAllCategory();
  }

  // Kategori Görüntüleme
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.categoriesService.findCategoryById(id);
  }

  // Kategori Güncelleme
  @Patch(':id')
  async update(@Param('id') id: number, @Body('name') newName: string) {
    return await this.categoriesService.updateCategory(id, newName);
  }

  // Kategori Silme
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.categoriesService.deleteCategory(id);
  }
}
