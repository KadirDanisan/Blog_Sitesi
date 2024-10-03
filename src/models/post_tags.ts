import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addTagToPost = async (postId: number, tagId: number) => {
    return await prisma.postTag.create({
        data: {
            postId: postId,
            tagId: tagId
        }
    });
};

export const deleteTagFromPost = async (postId: number, tagId: number) => {
    return await prisma.postTag.delete({
        where: {
            postId_tagId: {
                postId: postId,
                tagId: tagId
            }
        }
    });
};
