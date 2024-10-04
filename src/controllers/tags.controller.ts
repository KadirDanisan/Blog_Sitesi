import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TagsService } from '../service/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  // Tag Oluşturma
  @Post()
  async create(@Body('name') name: string) {
    return await this.tagsService.createTags(name);
  }

  // Tüm Tagları Listeleme
  @Get()
  async findAll() {
    return await this.tagsService.findAllTags();
  }

  // Tag Görüntüleme
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.tagsService.findTagsById(id);
  }

  // Tag Güncelleme
  @Patch(':id')
  async update(@Param('id') id: number, @Body('name') name: string) {
    return await this.tagsService.updateTags(id, name);
  }

  // Tag Silme (isteğe bağlı)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.tagsService.deleteTags(id);
  }
}
