class Despesa {
    constructor(descricao, data, valor, categoria) {

        if (!descricao || typeof descricao !== "string")
            throw new Error("Descrição inválida");

        if (!data || !(data instanceof Date))
            throw new Error("Data inválida");

        if (!valor || typeof valor !== "number")
            throw new Error("Valor inválido")

        if (!categoria || typeof categoria !== "categoria")
            throw new Error("Categoria inválida")

        this.descricao = descricao;
        this.data = data;
        this.valor = valor;
        this.categoria = categoria;
    }
}

module.exports = Despesa;