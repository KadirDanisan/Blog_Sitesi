import { Router } from "express";
import { getPosts, newPost, patchPosts, removePosts, getPostById } from "../controllers/post.js";

const router = Router();

router.get('/', getPosts);
router.post('/', newPost);
router.patch('/:id', patchPosts);
router.get('/:id', getPostById);
router.delete('/:id', removePosts);

export default router;