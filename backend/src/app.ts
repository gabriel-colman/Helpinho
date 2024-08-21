// Este arquivo pode ser usado para configurar qualquer lógica de inicialização
// ou middleware necessário para o backend
import 'source-map-support/register';
import serverless from 'serverless-http';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const handler = serverless(app);
