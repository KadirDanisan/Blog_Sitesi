import { Router } from "express";
import { getComments, newComments, patchComments, getCommentById } from "../controllers/comments.js";

const router = Router();

router.get('/', getComments);
router.post('/', newComments);
router.patch('/:id', patchComments);
router.get('/:id', getCommentById);

export default router;