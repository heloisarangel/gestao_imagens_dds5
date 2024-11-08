import { createUsuario, readUsuario } from "../models/UsuarioModel.js";


export async function criarUsuario(req,res) {
    console.log('UsuarioController :: criarUsuario')
    const usuario = req.body;

    if(!usuario.login || !usuario.senha || !usuario.funcao){
        res.status(400).json ({message: 'Logi, senha e funcao são obrigatórios'})
    }else{
        try {
            const [status, resposta] = await createUsuario(usuario);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
           res.status(500).json({message: 'Erro ao criar usuario'}) 
        }
    }
}

export async function mostrarUsuario(req,res) {
    console.log('UsuarioController :: mostrarUsuario');
  try {
    const [status, resposta] = await readUsuario();
    res.status(status).json(resposta);
  } catch (error) {
    res.status(500).json({message:'Erro ao mostrar usuario'})
  }
}

