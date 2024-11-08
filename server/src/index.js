import express from 'express';
import fileUpload from 'express-fileupload';
import {criarImagem, mostrarImagens, editarImagem, deletandoImagem, dowloadImagem,  mostrarUmaImagem} from './controllers/imagemController.js';
import cors from 'cors';
import { criarUsuario , mostrarUsuario} from './controllers/UsuarioController.js';
import { mostrarUmUsuario } from './models/UsuarioModel.js';


const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('API Funcionando')
});

app.get('/public/:nomeImg', dowloadImagem);

app.post('/imagem', criarImagem);
app.get('/imagem', mostrarImagens);
app.get('/imagem', mostrarImagens);
app.get('/imagem/:id_imagem', mostrarUmaImagem);
app.put('/imagem/:id_imagem',editarImagem);
app.delete('/imagem/:id_imagem', deletandoImagem);

//CRUD usuario
app.post('/usuario', criarUsuario);
app.get('/usuario', mostrarUsuario);
app.get('/usuario/:id_usuario', mostrarUmUsuario)

app.listen(porta, ()=>{
    console.log(`API Rodando na porta ${porta}`)
});

