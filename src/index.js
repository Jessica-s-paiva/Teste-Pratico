import express from 'express';
import { db } from './infra/db.js';
import { user } from './controller/usuarioController.js';

const app = express();// clonagem de todo modulo e atribuindo para a variavel app.

const port = process.env.PORT || 3000;

app.use(express.json());

user(app,db);

app.listen(port, ()=>{
    console.log('Rodando o servidor na porta 3000');
})//esta recebendo a porta.
