import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Category } from "src/category/category.schema";

export type TaskDocument = Task & Document

@Schema()
export class Task {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    time: string;

    @Prop({ type: Types.ObjectId, ref: 'Category' })
    category: Category;
}

export const TaskSchema = SchemaFactory.createForClass(Task)