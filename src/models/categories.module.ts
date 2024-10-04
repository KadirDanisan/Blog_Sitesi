import { Module } from '@nestjs/common';
import { CategoriesController } from '../controllers/categories.controller';
import { CategoriesService } from '../service/categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
