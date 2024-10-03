import { Router } from "express";
import { getCategory, postCategory, patchCategory, removeCategory, getCategoryById } from "../controllers/category.js";

const router = Router();

router.get('/', getCategory);
router.post('/', postCategory);
router.patch('/:id', patchCategory);
router.get('/:id', getCategoryById);
router.delete('/:id', removeCategory);

export default router;