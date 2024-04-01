import express from 'express';
import router from './app/routes';

const app = express();
app.use(router);

app.listen(3000, () => {
    console.log("servidor iniciado na porta 3000");
});