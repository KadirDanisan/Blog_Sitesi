import { Request, Response } from 'express';
import { addTagToPost, deleteTagFromPost } from '../models/post_tags.js';

export const addTag = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // Post ID
        const { tagId } = req.body; // Tag ID
        await addTagToPost(Number(id), Number(tagId));
        res.status(201).send({ message: "Etiket başarıyla eklendi." });
    } catch (err) {
        console.error(err);
        res.status(400).send("Etiket eklenirken hata oluştu.");
    }
};

export const deleteTag = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // Post ID
        const { tagId } = req.body; // Tag ID
        await deleteTagFromPost(Number(id), Number(tagId));
        res.send({ message: "Etiket başarıyla silindi." });
    } catch (err) {
        console.error(err);
        res.status(400).send("Etiket silinirken hata oluştu.");
    }
};
