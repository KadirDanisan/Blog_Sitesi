import express, {Request, Response} from 'express';
import { PrismaClient} from '@prisma/client';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());


app.get('/', (req: Request,res: Response) => {
     res.send("Hello Typescript");
});

app.listen(port, ()=> {
    console.log("Sunucu Ayakta");
});