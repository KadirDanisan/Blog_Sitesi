import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Prisma } from '@prisma/client';


@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // @Post()
  // async create(@Body('name') name: string) {
  //   return await this.categoriesService.createCategory(name);
  // }

  // Kategori Oluşturma
  @Post()
  async create(@Body() body: { name: string }) { 
    const data: Prisma.CategoryCreateInput = {
      name: body.name,
    };

    return await this.categoriesService.createCategory(data); 
  }
  
  // Kategori Listeleme
  @Get()
  async findAll() {
    const categories = await this.categoriesService.findAllCategory();
    return { categories };
  }

  // Kategori Görüntüleme
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const category =  await this.categoriesService.findCategoryById(id);
    return { category };
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
