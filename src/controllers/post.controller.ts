import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PostsService } from '../service/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // Post Oluşturma
  @Post()
  async create(@Body() body: { title: string; content: string; categoryId: number }) {
    return await this.postsService.createPost(body.title, body.content, body.categoryId);
  }

  // Tüm Postları Listeleme
  @Get()
  async findAll() {
    return await this.postsService.findAllPosts();
  }

  // Post Görüntüleme
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.postsService.findPostById(id);
  }

  // Post Güncelleme
  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: { title: string; content: string; categoryId: number }) {
    return await this.postsService.updatePost(id, body.title, body.content, body.categoryId);
  }

  // Post Silme
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.postsService.deletePost(id);
  }
}
