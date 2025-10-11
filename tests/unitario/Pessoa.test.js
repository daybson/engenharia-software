const Pessoa = require("../../src/model/Pessoa");

describe("Pessoa", () => {

    test("deve ser criada com atributos corretos", () => {
        const pessoa = new Pessoa('Daybson Paisante', new Date("1990-09-15"), '15869375029');

        expect(pessoa.nome).toBe('Daybson Paisante');
        expect(pessoa.nascimento).toEqual(new Date('1990-09-15'));
        expect(pessoa.cpf).toBe('15869375029');
    });

    test("deve lançar erro se nome não for definido", () => {
        expect(() => new Pessoa('', new Date("1990-09-15"), '15869375029')).toThrow('Nome inválido');
    });

    test("deve lançar erro se nascimento não for definido", () => {
        expect(() => new Pessoa('Daybson Paisante', null, '15869375029')).toThrow('Nascimento inválido');
    });

    test("deve lançar erro se cpf não for definido", () => {
        expect(() => new Pessoa('Daybson Paisante', new Date("1990-09-15"), '')).toThrow('CPF inválido');
    });

    test("deve lançar erro se cpf não for válido", () => {
        expect(() => new Pessoa('Daybson Paisante', new Date("1990-09-15"), '15869375020')).toThrow('CPF inválido');
    });
    test("deve lançar erro se cpf tem menos de 11 digitos", () => {
        expect(() => new Pessoa('Daybson Paisante', new Date("1990-09-15"), '5869375020')).toThrow('CPF inválido');
    });
    test("deve lançar erro se cpf tem 11 dígitos iguais", () => {
        expect(() => new Pessoa('Daybson Paisante', new Date("1990-09-15"), '11111111111')).toThrow('CPF inválido');
    });
});

