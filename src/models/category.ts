import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

//1. Kategori Oluşturma (POST /categories)
export const createCategory = async (name: string) => {
    return await prisma.category.create({
      data: {
        name: name,
      }
    });
};

//2. Kategori Listeleme (GET /categories)
export const findAllCategory = async ()=> {
    return await prisma.category.findMany();
};

//3. Kategori Görüntüleme (GET /categories/)
export const findCategoryById = async (id: number) => {
    return await prisma.category.findUnique({
        where: {
            id: id,
        },
        include: {
          posts : true
        },
    });
};

//4. Kategori Güncelleme (PATCH /categories/)
export const updateCategory = async(id: number, newName: string) => {
    return await prisma.category.update({
        where: {
            id: id,
        },
        data: {
            name: newName,
        }
    });
};

//5. Kategori Silme (DELETE /categories/)
export const deleteCategory = async (id: number) => {
    return await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
};