import express from 'express';
import fileUpload from 'express-fileupload';
import {mostrarImagem, criarImagem} from './controllers/imagemController.js';

const app = express();
const porta = 5000;

app.use(fileUpload());

app.get('/',(req,res)=>{
    res.send('API Funcionando')
});

app.get('/public/:nomeImg', mostrarImagem);

app.post('/imagem', criarImagem);

app.listen(porta, ()=>{
    console.log(`API Rodando na porta ${porta}`)
});
