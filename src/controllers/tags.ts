import { Request, Response } from "express";
import {findAllTags, createTags, updateTags, findTagsById} from "../models/tags.js";

export const getTagsById = async (req: Request, res: Response) =>{
    try{
        const {id} = req.params;
        const tag = await findTagsById(Number(id));
        res.render('tag', { tag });
    }catch(err){
        console.error(err);
        res.status(400).send("Gönderilere ulaşılamadı.");
    }
}

export const getTags = async(req: Request, res: Response) => {
    try{
        const tags = await findAllTags();
        res.render('tags', {tags}); 
    }catch(err){
        console.error(err);
        res.status(400).send("Gönderilere ulaşılamadı.");
    }
}

export const newTags = async(req: Request, res: Response) => {
    try{
        const {name} = req.body;
        await createTags(name);
        res.status(201).send({message: "Yorum başarıyla oluşturuldu"});
    }catch (err) {
        console.error(err);
        res.status(400).send("Gönderi oluşturulamadı.");
    }
}

export const patchTags = async(req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const {name} = req.body;
        await updateTags(Number(id), name);
        res.send({message: "Yorum başarıyla güncellendi."});
    }catch(err){
        console.log(err);
        res.status(400).send("Yorumlar güncellenirken hata oluştu..");
     }
}