import { Module } from '@nestjs/common';
import { TagsController } from '../controllers/tags.controller';
import { TagsService } from '../service/tags.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  imports: [PrismaModule],
})
export class TagsModule {}
