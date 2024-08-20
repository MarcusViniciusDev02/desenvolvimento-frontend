//Chama o express
const express = require('express');
//Inicia express
const app = express();
//Porta
const port = 5001;
//Pedindo pro express para trafegar na rede com Json
    app.use(express.json())

//Banco de dados
let database = [];

//Endpoint = rota (Todo este corpo)
app.get('/', (req, res) => { 
    try {

        // Se der certo, o json será exibido na tela. 
        return res.status(200).json({ produtos: database })
    } catch (error) {
        return res.status(500).json({ mensagem: error })
    }
})



//endpoint
app.post('/adicionar-produto', (req, res) => {
    try {

      
        let produto = {
            nome: req.body.nome,
            valor: req.body.valor,
            descricao: req.body.descricao,
            emEstoque: req.body.emEstoque,
            quantidade: req.body.quantidade

        }
        
        //Adicionando produto no banco de dados
        database.push(produto)

        return res.status(201).json({mensagem: "Produto adicionado com sucesso"});
        
    } catch (error) {
        return res.status(500).json({ mensgem: error })
    }
})

//Cria uma porta
app.listen(port, () => {
    console.log('Servidor executando');
    console.log(`http://localhost:${port}`);

})

