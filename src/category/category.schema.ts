import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Task } from "src/task/task.schema";

export type CategoryDocument = Category & Document

@Schema()
export class Category {
    @Prop()
    name: string;

    @Prop({ type: [Types.ObjectId], ref: 'Task' })
    tasks: Task[];
}

export const CategorySchema = SchemaFactory.createForClass(Category)