# language: pt

Funcionalidade: Cadastrar Pessoa
    Como um usuário não autenticado no sistema
    Eu gostaria de me cadastrar no sistema
    Para que eu possa lançar dados no sistema

    Cenário: Cadastro bem sucedido
        Dado que o usuário acessou a página de Pessoa
        E adicionou seu nome, nascimento e cpf
        E clicou em "Gravar"
        Então o sistema deve exibir a mensagem "Cadastrado com sucesso!"