import { Module } from '@nestjs/common';
import { CategoriesController } from '../controllers/categories.controller';
import { CategoriesService } from '../service/categories.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [PrismaModule],
})
export class CategoriesModule {}
