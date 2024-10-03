import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const createTags = async(name: string) => {
    return await prisma.tag.create({
        data: {
            name : name
        }
    });
};

export const findAllTags = async ()=> {
    return await prisma.tag.findMany({
        include: {
            postTags: true
        }
    });
};

export const findTagsById = async (id: number) => {
    return await prisma.tag.findUnique({
        where: {
            id: id
        },
        include: {
            postTags: true
        }
    });
};

export const updateTags = async(id: number, name: string) => {
    return await prisma.tag.update({
        where: {
            id: id,
        },
        data: {
            name: name,
        }
    });
};