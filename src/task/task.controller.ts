import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private taskService: TaskService
    ){}

    @Get()
    async getAllTask() {
        const tasks = await this.taskService.getAllTask()
        return {
            statusCode: HttpStatus.OK,
            message: 'Success get all task',
            data: tasks
        }
    }

    @Get(':id')
    async getTask(@Param('id') id: string) {
        const task = await this.taskService.getTask(id)
        return {
            statusCode: HttpStatus.OK,
            message: 'Success get task',
            data: task
        }
    }

    @Post()
    async createTask(@Body() data: TaskDTO) {
        const task = await this.taskService.createTask(data)
        return {
            statusCode: HttpStatus.OK,
            message: 'Success create task',
            data: task
        }
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() data: TaskDTO) {
        const task = await this.taskService.updateTask(id, data)
        return {
            statusCode: HttpStatus.OK,
            message: 'Success update task',
            data: task
        }
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        const task = await this.taskService.deleteTask(id)
        return {
            statusCode: HttpStatus.OK,
            message: 'Success delete task',
            data: task
        }
    }
}
