import { Schema, model } from "mongoose";
import Joi from "joi";

// Validation schemes
export const PostValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    published: Joi.string().required(),
});

// Creating an Interface
interface IPosts {
    title: string,
    description: string,
    author: string,
    published: boolean,
}

// Post Schema
const postSchema = new Schema<IPosts>({
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    },
});

export const Post = model<IPosts>('Post', postSchema);