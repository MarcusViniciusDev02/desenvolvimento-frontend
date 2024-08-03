const express = require('express');
const app = express();
const porta = 5000

let produtos = [
    {
        nome: "StarCraft",
        valor: 1000,
        descricao: "Jogo maneirinho",
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/e/e0/StarCraft.jpg',
    },
    {
        nome: "The Last of Us",
        valor: 101100,
        descricao: "Obra de arte",
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/66/The_Last_of_Us_logo.png'
        
    },
    {
        nome: "Star Wars",
        valor: 100232,
        descricao: "Jogo legal",

    }
]

app.get('/usuario', (requisicao, resposta) => {
    let queryUrl = requisicao.query

    return resposta.json(queryUrl).status(200)
})

app.get('/', (requisicao, resposta) => {
    try{ 
        //Caso ocorra um erro do usuário
    return resposta.json(produtos).status(200)
    }catch(error){
        return resposta.json({message: "Operação inválida"}).status(400);
    }
})

app.listen(porta, () => {
    console.log(`Servidor funcionando na porta ${porta}`)
})

