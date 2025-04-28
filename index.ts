import { PrismaClient } from '@prisma/client';
import express from 'express';
import router from './app/routes';
import encryptor from './app/encryptor/encryptor';

const app = express();
app.use(router);

app.listen(3000, () => {
    console.log("servidor iniciado na porta 3000");
});

console.log(encryptor.encrypt("teste"));
console.log(encryptor.decrypt("92240a188f8f594b247afb2a5422ee79"));

const prismaConnection = new PrismaClient();
export default prismaConnection;