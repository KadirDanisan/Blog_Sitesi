import express, { Request, Response } from 'express';
import category from './routers/category.js';
import posts from './routers/posts.js';
import comments from './routers/comments.js';
import tags from './routers/tags.js';
import post_tags from './routers/post_tags.js';
import dotenv from 'dotenv';
dotenv.config(); 
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirName, 'views'));

app.use('/category', category);
app.use('/posts', posts);
app.use('/comments', comments);
app.use('/tags', tags);
app.use('/posts/:id/tags', post_tags);

app.listen(process.env.PORT || 3000, () => {
    console.log("Sunucu Ayakta");
});
