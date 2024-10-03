import { Router } from 'express';
import { addTag, deleteTag } from '../controllers/post_tags.js';

const router = Router();

router.post('/posts/:id/tags', addTag);

router.delete('/posts/:id/tags', deleteTag);

export default router;
