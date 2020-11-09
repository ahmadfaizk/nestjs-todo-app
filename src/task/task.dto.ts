import { Category } from "src/category/category.schema";

export class TaskDTO {
    name: string;
    description: string;
    time: string;
    category: Category;
}