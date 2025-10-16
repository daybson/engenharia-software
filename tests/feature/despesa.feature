# language: pt

Funcionalidade: Cadastrar Despesa
    Como um usuário do sistema
    Eu gostaria de cadastrar uma despesa
    Para que eu possa manter meu registro financeiro em dia

    Cenário: Cadastro bem sucedido
        Dado que o usuário acessou a página de Cadastrar Despesa
        E adicionou descrição, data, valor e selecionou uma categoria
        E clicou em "Gravar"
        Então o sistema deve exibir a mensagem "Despesa cadastrada com sucesso!"

    Cenário: Cadastro mal sucedido
        Dado que o usuário acessou a página de Cadastrar Despesa
        E não adicionou descrição, data, valor e selecionou uma categoria
        E clicou em "Gravar"
        Então o sistema deve exibir a mensagem "Campos obrigatórios não foram informados."