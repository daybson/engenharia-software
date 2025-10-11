const Despesa = require('../../src/model/Despesa');

describe('Despesa', () => {
    test("deve ser criada com atributos corretos", () => {
        //descricao, data, valor, categoria
        const despesa = new Despesa('Liquidificador', new Date('2025-10-05'), 249.90, 'Casa');

        expect(despesa.descricao).toBe('Liquidificador');
        expect(despesa.data).toEqual(new Date('2025-10-05'));
        expect(despesa.valor).toBe(249.90);
        expect(despesa.categoria).toBe('Casa');
    });

    test("deve lançar erro se descrição não for definida", () => {
        expect(() => new Despesa('', new Date('2025-10-05'), 249.90, 'Casa')).toThrow("Descrição inválida");
    });

    test("deve lançar erro se data não for definida", () => {
        expect(() => new Despesa('Liquidificador', null, 249.90, 'Casa')).toThrow("Data inválida");
    });

    test("deve lançar erro se valor não for definido", () => {
        expect(() => new Despesa('Liquidificador', new Date('2025-10-05'), null, 'Casa')).toThrow("Valor inválido");
    });
    test("deve lançar erro se valor for negativo", () => {
        expect(() => new Despesa('Liquidificador', new Date('2025-10-05'), -29.90, 'Casa')).toThrow("Valor inválido");
    });

    test("deve lançar erro se categoria não for definida", () => {
        expect(() => new Despesa('Liquidificador', new Date('2025-10-05'), 249.90, '')).toThrow("Categoria inválida");
    });
});