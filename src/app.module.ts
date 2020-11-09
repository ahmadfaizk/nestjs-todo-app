import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/todo-app'), CategoryModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
