import { Module } from '@nestjs/common';
import { CategoriesModule } from './models/categories.module';
import { CommentModule } from './models/comments.module';
import { PostsModule } from './models/posts.module';
import { TagsModule } from './models/tags.module';
import { PostTagsModule } from './models/post_tags.module';
@Module({
  imports: [CommentModule, CategoriesModule, PostsModule, TagsModule, PostTagsModule],
})
export class AppModule {}