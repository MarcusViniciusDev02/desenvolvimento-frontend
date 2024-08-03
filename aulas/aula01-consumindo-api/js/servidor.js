let http = require('http')
const port = 5001

let produtos = [
    {nome: 'Notebook', valor: 2400, imagem: 'https://m.media-amazon.com/images/I/61ZPReoZJlL.__AC_SX300_SY300_QL70_ML2_.jpg'},
    {nome: 'Teclado Gamer', valor: 200}
]

let requestHandler = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.write(JSON.stringify(produtos))
    return res.end()
}

const server = http.createServer(requestHandler)

server.listen(port, () => {
    console.log('Servidor rodando na porta 6000')
})

