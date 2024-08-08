const express = require('express');
const app = express();
const porta = 5001;

let produtos = [
    {
        nome: "Chá de Erva Doce",
        valor: 12.30,
        descricao: "Ótimo chá de erva doce",
        imagem: "https://static.itdg.com.br/images/622-auto/4f610064276482e0bcd99903554fd2a8/shutterstock-2244178141.jpg"
    },
    {
        nome: "Chá de Erva Cidreira",
        valor: 15.50,
        descricao: "Ótimo chá de erva cidreira",
        imagem: "https://s2-ge.glbimg.com/hqjaItwcdkvs73PVcPRAO5V9BcQ=/0x0:1254x836/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/X/j/AAb9VJQh6nQQNP2PikWw/istock-915846124.jpg"
    },
    {
        nome: "Chá de Maracujá",
        valor: 12.30,
        descricao: "Ótimo chá de maracujá",
        imagem: "https://www.dicasdemulher.com/wp-content/uploads/2020/11/cha-de-maracuja-00.png"
    }
]

app.get('/', (requisicao, resposta) => {
    let queryUrl = requisicao.query;
    return resposta.json(queryUrl).status(200);
})

app.get('/cha-erva-doce', (requisicao, resposta) => {
    try {
        return resposta.json(produtos[0]).status(200);
    } catch (error) {
        return resposta.json({ message: "Não achamos seu chá." }).status(400);
    }
})

app.get('/cha-erva-cidreira', (requisicao, resposta) => {
    try {
        return resposta.json(produtos[1]).status(200);
    } catch (error) {
        return resposta.json({ message: "Não encontramos o chá!" }).status(400);
    }
})

app.get('/cha-maracuja', (requisicao, resposta) => {
    try {
        return resposta.json(produtos[2]).status(200);
    } catch (error) {
        return resposta.json({ message: 'Não conseguimos encontrar o seu querido chá!' }).status(400);
    }

})

app.listen(porta, () => {
    console.log(`Servidor funcionando na rota ${porta}`)
})