import { Request, Response } from "express";
import {findAllCategory, createCategory, updateCategory, deleteCategory, findCategoryById} from "../models/category.js";

export const postCategory = async (req: Request, res: Response) => {
    try{
        const{ name } = req.body;
        await createCategory(name);
        res.status(201).send({message: "Kategorie başarıyla oluşturuldu."});
    }catch(err){
        console.log(err);
        res.status(400).send("Kategori oluşturulurken hata oluştu.");
    }
}

export const getCategory =  async (req: Request, res: Response)=> {
    try{
        const categories = await findAllCategory();
        res.render('categories', {categories});
    }catch(err){
       console.log(err);
       res.status(400).send("Kategorilere ulaşılamadı...");
    }
}

export const patchCategory = async (req: Request, res: Response)=> {
    try{
        const {id} = req.params;
        const {name} = req.body;
        await updateCategory(Number(id), name);
        res.send({message: "Kategori başarıyla güncellendi."});
    }catch(err){
       console.log(err);
       res.status(400).send("Kategorileri güncellenirken hata oluştu..");
    }
}

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const category = await findCategoryById(Number(id));
        res.render('category', { category });
    } catch (err) {
        console.log(err);
        res.status(400).send("Kategoriye ulaşılamadı.");
    }
}

export const removeCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteCategory(Number(id));
        res.send({ message: "Kategori başarıyla silindi." });
    } catch (err) {
        console.log(err);
        res.status(400).send("Kategori silinirken hata oluştu.");
    }
}