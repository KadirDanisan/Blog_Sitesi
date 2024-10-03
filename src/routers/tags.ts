import { Router } from "express";
import { getTags, newTags, patchTags, getTagsById } from "../controllers/tags.js";

const router = Router();

router.get('/', getTags);
router.post('/', newTags);
router.patch('/:id', patchTags);
router.get('/:id', getTagsById);

export default router;