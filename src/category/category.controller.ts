import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CategoryDTO } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Get()
    async getAllCategory() {
        const categories = await this.categoryService.getAllCategory()
        return {
            statusCode: HttpStatus.OK,
            message: 'Success get all category',
            data: categories
        }
    }

    @Get(':id')
    async getCategory(@Param('id') id: string) {
        const category = await this.categoryService.getCategory(id)
        return {
            statusCode: HttpStatus.OK,
            message: 'Success get category',
            data: category
        }
    }

    @Post()
    async createCategory(@Body() data: CategoryDTO) {
        const category = await this.categoryService.createCategory(data)
        return {
            statusCode: HttpStatus.OK,
            message: 'Success create category',
            data: category
        }
    }

    @Put(':id')
    async updateCategory(@Param('id') id: string, @Body() data: CategoryDTO) {
        const category = await this.categoryService.updateCategory(id, data)
        return {
            statusCode: HttpStatus.OK,
            message: 'Success update category',
            data: category
        }
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string) {
        const category = await this.categoryService.deleteCategory(id)
        return {
            statusCode: HttpStatus.OK,
            message: 'Success delete category',
            data: category
        }
    }
}
