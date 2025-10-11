class Pessoa {
    constructor(nome, nascimento, cpf) {
        if (!nome || typeof nome !== "string") {
            throw new Error("Nome inválido");
        }

        if (!nascimento || typeof nascimento !== "Date") {
            throw new Error("Nascimento inválido");
        }

        if (!cpf || typeof cpf !== "string") {
            throw new Error("CPF inválido");
        }

        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
    }
}

module.exports = Pessoa;