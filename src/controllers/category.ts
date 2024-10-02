import { Request, Response } from "express";
import {findAllCategory} from "../models/category.js";

export const getCategory =  async (req: Request, res: Response)=> {
    try{
        const categories = await findAllCategory();
        res.render('categories', {categories});
    }catch(err){
       console.log(err);
       res.status(400).send("Kategorilere ulaşılamadı...");
    }
}