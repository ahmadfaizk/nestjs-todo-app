import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDTO } from './task.dto';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name)
        private taskModel: Model<TaskDocument>
    ){}

    async getAllTask(): Promise<Task[]> {
        return await this.taskModel.find().populate('category')
    }

    async getTask(id: string): Promise<Task> {
        return await this.taskModel.findById(id).populate('category')
    }

    async createTask(data: TaskDTO): Promise<Task> {
        const category = new this.taskModel(data)
        return category.save()
    }

    async updateTask(id: string, data: TaskDTO): Promise<Task> {
        return await this.taskModel.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteTask(id: string): Promise<any> {
        return await this.taskModel.findByIdAndDelete(id)
    }
}
