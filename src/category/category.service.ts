import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/task/task.schema';
import { CategoryDTO } from './category.dto';
import { Category, CategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel: Model<CategoryDocument>
    ){}

    async getAllCategory(): Promise<Category[]> {
        return await this.categoryModel.find()
    }

    async getCategory(id: string): Promise<Category> {
        return await this.categoryModel.findById(id).populate({ path: 'tasks', model: 'Task' })
    }

    async createCategory(data: CategoryDTO): Promise<Category> {
        const category = new this.categoryModel(data)
        return category.save()
    }

    async updateCategory(id: string, data: CategoryDTO): Promise<Category> {
        return await this.categoryModel.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteCategory(id: string): Promise<any> {
        return await this.categoryModel.findByIdAndDelete(id)
    }

    async pushTask(id: Category, task: Task): Promise<any> {
        return await this.categoryModel.findByIdAndUpdate(id, {
            $push: {
                tasks: task
            }
        }, { new: true })
    }
}
