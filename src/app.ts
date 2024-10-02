import express, { Request, Response } from 'express';
import category from './routers/category.js';
import dotenv from 'dotenv'; // require yerine import
dotenv.config(); // dotenv'i burada başlat
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirName, 'views'));

app.use('/category', category);

app.listen(process.env.PORT || 3000, () => {
    console.log("Sunucu Ayakta");
});
