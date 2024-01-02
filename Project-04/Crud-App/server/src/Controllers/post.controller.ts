import { Request, Response } from 'express'
import { PostValidate } from "../Models/posts";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../Services/post";

const addPost = async (req: Request, res: Response) => {
    const data = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        published: req.body.published,
    }

    const { error, value } = PostValidate
        .validate(data);

    if (error) {
        res.send(error.message);
    } else {
        // call create post function
        const post = await createPost(value);
        res.status(201).send(post);
    }
};

const getAllPosts = async (req: Request, res: Response) => {
    const posts = await getPosts();
    res.send(posts);
};

const getSinglePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await getPost(id);
    res.send(post);
};

const updateaPost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await updatePost(id, req.body);
    res.send(post);
    res.send('Post Updated Successfully');
};

const deleteaPost = async (req: Request, res: Response) => {
    const id = req.params.id;
    await deletePost(id);
    res.send('Post Deleted');
};

const PostControllers = () => ({
    addPost,
    deleteaPost,
    updateaPost,
    getAllPosts,
    getSinglePost,
});

export default PostControllers;