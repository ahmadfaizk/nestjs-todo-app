import { Category } from "src/category/category.schema";

export class TaskDTO {
    name: string;
    description: string;
    date: Date;
    done: boolean;
    category: Category;
}