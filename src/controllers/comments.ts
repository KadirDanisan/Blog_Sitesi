import { Request, Response } from "express";
import {findAllComments, createComment, updateComment, findCommentById} from "../models/comments.js";

export const getCommentById = async (req: Request, res: Response) =>{
    try{
        const {id} = req.params;
        const comment = await findCommentById(Number(id));
        res.render('comment', { comment });
    }catch(err){
        console.error(err);
        res.status(400).send("Gönderilere ulaşılamadı.");
    }
}

export const getComments = async(req: Request, res: Response) => {
    try{
        const comments = await findAllComments();
        res.render('comments', {comments}); 
    }catch(err){
        console.error(err);
        res.status(400).send("Gönderilere ulaşılamadı.");
    }
}

export const newComments = async(req: Request, res: Response) => {
    try{
        const {content, commenter, postId} = req.body;
        await createComment(content, commenter, postId);
        res.status(201).send({message: "Yorum başarıyla oluşturuldu"});
    }catch (err) {
        console.error(err);
        res.status(400).send("Gönderi oluşturulamadı.");
    }
}

export const patchComments = async(req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const {content, commenter, postId} = req.body;
        await updateComment(Number(id), content, commenter, postId);
        res.send({message: "Yorum başarıyla güncellendi."});
    }catch(err){
        console.log(err);
        res.status(400).send("Yorumlar güncellenirken hata oluştu..");
     }
}