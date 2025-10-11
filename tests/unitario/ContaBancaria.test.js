const ContaBancaria = require("../../src/model/ContaBancaria");

describe("ContaBancaria", () => {

    test("deve ser criada com atributos corretos", () => {
        const conta = new ContaBancaria('Itaú', '669458', 'X', '1005', '9');

        expect(conta.nome).toBe('Itaú');
        expect(conta.numeroConta).toBe('669458');
        expect(conta.digitoConta).toBe('X');
        expect(conta.numeroAgencia).toBe('1005');
        expect(conta.digitoAgencia).toBe('9');
    });
    
    test("deve lançar erro se nome não for definido", () => {
        expect(() => new ContaBancaria('', '669458', 'X', '1005', '9')).toThrow('Nome inválido');
    });

    test("deve lançar erro se número da conta não for definido", () => {
        expect(() => new ContaBancaria('Itaú', '', 'X', '1005', '9')).toThrow('Número Conta inválido');
    });
    test("deve lançar erro se dígito da conta não for definido", () => {
        expect(() => new ContaBancaria('Itaú', '669458', '', '1005', '9')).toThrow('Dígito Conta inválido');
    });

    test("deve lançar erro se número da agência não for definido", () => {
        expect(() => new ContaBancaria('Itaú', 'X', 'X', '', '9')).toThrow('Número Agência inválido');
    });
    test("deve lançar erro se dígito da agência não for definido", () => {
        expect(() => new ContaBancaria('Itaú', '669458', 'X', '1005', '')).toThrow('Dígito Agência inválido');
    });

});

