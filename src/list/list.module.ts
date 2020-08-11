import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([List]),
    //forFeature 가 뭔지 서술할 것.
  ],
  providers: [ListService],
  controllers: [ListController]
})
export class ListModule {}
