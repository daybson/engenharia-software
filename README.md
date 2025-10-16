# Engenharia de Software
Este é um projeto de estudo para a disciplina de Engenharia de Software, que consiste em uma aplicação web full-stack simples. O objetivo é demonstrar a integração entre um frontend estático (HTML, CSS, JavaScript) e um backend Node.js com Express

# Funcionalidades
    - Consulta de Cotação do Dólar: A página inicial exibe a cotação atual do Dólar Americano (USD) em Reais (BRL), consumindo uma API externa através do backend.
    - Cadastro de Pessoas: Uma página com um formulário para cadastrar um novo usuário (Nome, Nascimento, CPF). Os dados são enviados para o backend, que simula a gravação em um banco de dados.
    - Cadastro de Conta Corrente: Uma página com um formulário para cadastrar uma noao conta corrente.
    - Cadastro de Despesas: Uma página com um formulário para cadastrar uma nova despesa.
    - API Interna: O backend expõe rotas para servir os dados ao frontend de forma segura e controlada.
    - Testes Unitários: O projeto inclui testes para a camada de serviço, garantindo a qualidade e o comportamento esperado da lógica de negócio.

# Como Executar o Projeto
## Pré-requisitos

    Node.js (versão 14 ou superior)

    npm

## Passos

    Clone o repositório:

    > git clone [https://github.com/daybson/engenharia-software.git](https://github.com/daybson/engenharia-software.git)

    Navegue até a pasta do projeto:

    > cd engenharia-software

    Instale as dependências do backend:

    > npm install

    Inicie o servidor:

    > npm start

    Acesse a aplicação:
    Abra seu navegador e acesse http://localhost:3000.

# Como Executar os Testes

Para rodar os testes do projeto, execute o seguinte comando na raiz do projeto:
  > npm run test
> 
  > npm run test:coverage
>     
  > npm run test:acceptance
