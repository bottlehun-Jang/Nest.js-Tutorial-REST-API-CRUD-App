import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ListsService } from './list/lists.service';

@Module({
  imports: [ListModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'appdb.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService, ListModule],
})
export class AppModule { }
