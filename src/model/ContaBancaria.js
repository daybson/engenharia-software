class ContaBancaria {
    constructor(nome, numeroConta, digitoConta, numeroAgencia, digitoAgencia) {
        if (!nome || typeof nome !== "string") {
            throw new Error("Nome inválido");
        }

        if (!numeroConta || typeof numeroConta !== "string") {
            throw new Error("Número Conta inválido");
        }
        if (!digitoConta || typeof digitoConta !== "string") {
            throw new Error("Dígito Conta inválido");
        }

        if (!numeroAgencia || typeof numeroAgencia !== "string") {
            throw new Error("Número Agência inválido");
        }
        if (!digitoAgencia || typeof digitoAgencia !== "string") {
            throw new Error("Dígito Agência inválido");
        }

        this.nome = nome;
        this.numeroConta = numeroConta;
        this.digitoConta = digitoConta;
        this.numeroAgencia = numeroAgencia;
        this.digitoAgencia = digitoAgencia;
    }
}

module.exports = ContaBancaria;