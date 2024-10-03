import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const createComment = async(content: string, commenter: string, postId: number) => {
    return await prisma.comment.create({
        data: {
            content:  content,
            commenter: commenter,
            postId: postId
        }
    });
};

export const findAllComments = async ()=> {
    return await prisma.comment.findMany({
        include: {
            post: true
        }
    });
};

export const findCommentById = async (id: number) => {
    return await prisma.comment.findUnique({
        where: {
            id: id
        },
        include: {
            post: true
        }
    });
};

export const updateComment = async(id: number, content: string, commenter: string, postId: number ) => {
    return await prisma.comment.update({
        where: {
            id: id,
        },
        data: {
            content:  content,
            commenter: commenter,
            postId: postId
        }
    });
};
