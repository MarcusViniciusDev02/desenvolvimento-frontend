# Criando primeira web api com express

### O que é uma API?

- É um serviço pronto, que vou pegar e utilizar para uma certa funcionalidade na minha página. Tipo o buscador de CEP, ao invés de registrar todos os ceps na minha máquina, já utilizo um serviço pronto para isso no site que eu criei. 

### Dois tipos de erro

- **(400 - 499)** Erro do cliente.
- **(500 - 599)** Erro do servidor.

### O que é o npm?
(Pergunta de entrevista)
-Node Package Manager (gerenciador de pacotes do node)

## Comandos

    npm init | Inicia pacote para node.js
    
    npm init -y | Inicia pacote para node.js sem fazer perguntas.

    npm install express | Instala o framework express


### Comandos do servidor(?)
**app** 
- Inicia o express (app é uma variável)

**GET**
- Pega a função que vier a seguir

**(requisicao, resposta)**
- A requisição é o que o client pede para receber como resposta. (No caso, o navegador)
- A resposta é o que a função retorna para a tela, ou para uma funcionalidade.

**(dentro da função)return resposta.send()** 
- faz com que a função retorne uma resposta ao cliente através da rota. (Posso passar qualquer coisa)

