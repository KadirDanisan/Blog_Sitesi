import { Request, Response } from "express";
import {createPost, findAllPosts, findPostById, updatePost, deletePost} from "../models/posts.js";

export const getPostById = async (req: Request, res: Response) =>{
    try{
        const {id} = req.params;
        const post = await findPostById(Number(id));
        res.render('post', { post });
    }catch(err){
        console.error(err);
        res.status(400).send("Gönderilere ulaşılamadı.");
    }
}

export const getPosts = async(req: Request, res: Response) => {
    try{
        const posts = await findAllPosts();
        res.render('posts', {posts}); 
    }catch(err){
        console.error(err);
        res.status(400).send("Gönderilere ulaşılamadı.");
    }
}

export const newPost = async(req: Request, res: Response) => {
    try{
        const {title, content, categoryId} = req.body;
        await createPost(title, content, categoryId);
        res.status(201).send({message: "Post başarıyla oluşturuldu"});
    }catch (err) {
        console.error(err);
        res.status(400).send("Gönderi oluşturulamadı.");
    }
}

export const patchPosts = async(req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const {title, content, categoryId} = req.body;
        await updatePost(Number(id), title, content, categoryId);
        res.send({message: "Posts başarıyla güncellendi."});
    }catch(err){
        console.log(err);
        res.status(400).send("Postslar güncellenirken hata oluştu..");
     }
}

export const removePosts = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deletePost(Number(id));
        res.send({ message: "Posts başarıyla silindi." });
    } catch (err) {
        console.error(err);
        res.status(500).send("Gönderi silinemedi.");
    }
}