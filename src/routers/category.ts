import { Router } from "express";
import { getCategory } from "../controllers/category.js";

const router = Router();

router.get('/', getCategory);

export default router;