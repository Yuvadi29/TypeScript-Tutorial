import { Post } from "../Models/posts";

// All the Api calls

// Create a Post
export const createPost = async (data: any) => {
    try {
        const newPost = await Post.create(data);
        return newPost;
    } catch (error) {
        console.log(error);
    }
};

// Get All Posts
export const getPosts = async () => {
    try {
        const posts = await Post.find({});
        return posts;
    } catch (error) {
        console.log(error);
    }
};

// Get a Single Post
export const getPost = async (id: string) => {
    try {
        const post = await Post.findById({ _id: id });
        if (!post) {
            return 'Post Not Available'
        }
        return post;
    } catch (error) {
        console.log(error);
    }
};

// Update a post
export const updatePost = async (id: string, data: any) => {
    try {
        const post = await Post.findByIdAndUpdate(
            { _id: id },
            data,
            { new: true },
        )
        if (!post) {
            return 'Post Not Available'
        }
        return post;
    } catch (error) {
        console.log(error);
    }
}

// Delete a Post
export const deletePost = async (id: string) => {
    try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return 'Post Not Available'
        }
    } catch (error) {
        console.log(error);
    }
}