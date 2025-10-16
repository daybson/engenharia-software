# language: pt

Funcionalidade: Cadastrar Conta Bancaria
    Como um usuário do sistema
    Eu gostaria de cadastrar minha conta bancária
    Para que eu possa usá-la nas despesas

    Cenário: Cadastro bem sucedido
        Dado que o usuário acessou a página de Conta bancaria
        E adicionou nome, número da conta, dígito da conta, número da agência, dígito da agência
        E clicou em "Gravar"
        Então o sistema deve exibir a mensagem "Conta bancária cadastrada com sucesso!"

    Cenário: Cadastro mal sucedido
        Dado que o usuário acessou a página de Conta bancaria
        E não adicionou nome, número da conta, dígito da conta, número da agência, dígito da agência
        E clicou em "Gravar"
        Então o sistema deve exibir a mensagem "Campos obrigatórios não foram informados."