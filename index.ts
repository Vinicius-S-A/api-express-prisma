import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log("servidor iniciado na porta 3000");
});