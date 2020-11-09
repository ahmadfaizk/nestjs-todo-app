import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.schema';
import { Category, CategorySchema } from 'src/category/category.schema';
import { CategoryService } from 'src/category/category.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }, { name: Category.name, schema: CategorySchema }])],
  providers: [TaskService, CategoryService],
  controllers: [TaskController]
})
export class TaskModule {}
