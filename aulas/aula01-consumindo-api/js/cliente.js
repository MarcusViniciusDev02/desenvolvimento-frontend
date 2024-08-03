let conteudoDIV = document.getElementById('conteudo')
fetch('http://localhost:5001', {
    methods: 'GET'
})
    .then(resposta => resposta.json())
    .then(dados => {
        for (dado of dados) {
            let paragrafo = document.createElement('p')
            let valor = document.createElement('p')
            paragrafo.textContent = dado.nome
            valor.textContent = dado.val'or
            conteudoDIV.appendChild(paragrafo)
            conteudoDIV.appendChild(valor)
        }
    })


// const buscarProdutos = () => {
// fetch('http://localhost:5001')
// .then(resposta => resposta.json())
//     .then(dados => console.log(dados))
// }