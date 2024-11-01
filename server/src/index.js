import express from 'express';
import fileUpload from 'express-fileupload';
import {criarImagem, mostrarImagens, editarImagem, mostrarImagem,deletandoImagem} from './controllers/imagemController.js';


const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API Funcionando')
});

app.get('/public/:nomeImg', mostrarImagem);

app.post('/imagem', criarImagem);
app.get('/imagem', mostrarImagens);
app.get('/imagem', mostrarImagens);
//app.get('/imagem/:id_imagem', mostrarUmaImagem);
app.put('/imagem/:id_imagem',editarImagem);
app.delete('/imagem/:id_imagem', deletandoImagem);

app.listen(porta, ()=>{
    console.log(`API Rodando na porta ${porta}`)
});

