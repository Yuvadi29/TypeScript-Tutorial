import express from "express";
import PostControllers from "../Controllers/post.controller";

// Initialting the router
export const router = express.Router();

// Add Route
router.post('/', PostControllers().addPost);

// Delete Route
router.delete('/:id', PostControllers().deleteaPost);

// Update Route
router.put('/:id', PostControllers().updateaPost);

// Get All Posts Route
router.get('/', PostControllers().getAllPosts);

// Get a Post Route
router.get('/:id', PostControllers().getSinglePost);