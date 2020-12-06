import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Category } from "src/category/category.schema";

export type TaskDocument = Task & Document

@Schema()
export class Task {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    description: string;
    @Prop({ required: true })
    date: Date;
    @Prop({ required: true, default: false })
    done: boolean;
    @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
    category: Category;
}

export const TaskSchema = SchemaFactory.createForClass(Task)