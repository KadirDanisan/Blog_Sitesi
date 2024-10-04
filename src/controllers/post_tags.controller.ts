import { Controller, Post, Delete, Param } from '@nestjs/common';
import { PostTagsService } from '../service/post_tags.service';

@Controller('post-tags')
export class PostTagsController {
  constructor(private readonly postTagsService: PostTagsService) {}

  // Post'a Tag Ekleme
  @Post(':postId/:tagId')
  async addTag(@Param('postId') postId: number, @Param('tagId') tagId: number) {
    return await this.postTagsService.addTagToPost(postId, tagId);
  }

  // Post'tan Tag Silme
  @Delete(':postId/:tagId')
  async removeTag(@Param('postId') postId: number, @Param('tagId') tagId: number) {
    return await this.postTagsService.deleteTagFromPost(postId, tagId);
  }
}
