const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

let database = [];

app.post('/cadastrar-usuario', (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            confirmacaoSenha: req.body.confirmacaoSenha
        }

        const usuarioExistente = database.find(usuarioExistente => usuarioExistente.email === usuario.email)
        if (usuarioExistente) {
            return res.status(400).json({ mensagem: 'Usuario já existe' });
        }

        if (usuario.senha !== usuario.confirmacaoSenha) {
            return res.status(400).json({ mensagem: 'Senhas diferentes' })
        }

        database.push(usuario)
        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        return res.status(500).json({ mensagem: error })

    }
})

app.post('/login', (req, res) => {
    try {
        let usuarioLogin = {
            email: req.body.email,
            senha: req.body.senha,
        }

        const buscaUsuario = database.find(usuario => usuario.email === usuarioLogin.email)

        if (!buscaUsuario || buscaUsuario.senha !== usuarioLogin.senha) {
            return res.status(400).json({ mensagem: 'Email ou senha inválidos!' });
        }

        return res.status(200).json({ mensagem: 'Login bem-sucedido!' });
    } catch (error) {
        return res.status(500).json({ mensagem: error })
    }

    try {
        // Extraindo as informações do login
        let usuarioLogin = {
            email: req.body.email,
            senha: req.body.senha,
        }


        if (!usuarioEncontrado || usuarioEncontrado.senha !== usuarioLogin.senha) {
            return res.status(400).json({ mensagem: 'Email ou senha inválidos!' });
        }

        return res.status(200).json({ mensagem: 'Login bem-sucedido!' });
    } catch (error) {
        return res.status(500).json({ mensagem: error });
    }

})

app.get('/lista-usuarios', (req, res)=>{
    try{
        return res.status(200).json({usuarios: database});
    }catch(error){
        return res.status(500).json({mensagem: error})
    }
})




app.listen(port, () => {
    console.log('Servidor executando');
    console.log(`http://localhost:${port}`);

})