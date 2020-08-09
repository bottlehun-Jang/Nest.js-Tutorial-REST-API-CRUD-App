import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListController } from './list/list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([List]),
    //forFeature 가 뭔지 서술할 것.
  ],
  providers: [ListsService],
  controllers: [ListController]
})
export class ListModule {}
