import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const createPost = async(title: string, content: string, categoryId: number) => {
    return await prisma.post.create({
        data: {
            title: title,
            content: content,
            categoryId: categoryId
        }
    });
};

export const findAllPosts = async ()=> {
    return await prisma.post.findMany({
        include: {
            category: true,
            comments: true,
            postTags: true
        }
    });
};

export const findPostById = async (id: number) => {
    return await prisma.post.findUnique({
        where: {
            id: id
        },
        include: {
            category: true,
            comments: true,
            postTags: true
        }
    });
};

export const updatePost = async(id: number, title: string, content: string, categoryId: number) => {
    return await prisma.post.update({
        where: {
            id: id,
        },
        data: {
            title: title,
            content: content,
            categoryId: categoryId
        }
    });
};

export const deletePost = async(id: number) => {
    return await prisma.post.update({
        where: {
            id: id
        },
        data: {
            deletedAt: new Date()
        }
    });
};