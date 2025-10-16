const { defineFeature, loadFeature } = require("jest-cucumber");
const path = require("path");
const Pessoa = require("../../src/model/Pessoa");
const puppeteer = require('puppeteer');

// Aumenta o timeout padrão do jest para evitar timeouts em operações de browser
jest.setTimeout(30000);

const feature = loadFeature(path.join(__dirname, "../feature/pessoa.feature"));

defineFeature(feature, (test) => {
    let browser, page;
    const filePath = 'http://localhost:3000/pessoa.html';

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 500
        });

        page = await browser.newPage();
        await page.goto(filePath);
    });

    afterAll(async () => {
        if (browser && typeof browser.close === 'function') {
            try {
                await browser.close();
            } catch (err) {
                // log e ignora erros ao fechar o browser
                // console.warn('Erro ao fechar o browser:', err);
            }
        }
    });

    // O título do `test` precisa coincidir exatamente com o título do cenário no arquivo .feature
    test("Cadastro bem sucedido", ({ given, and, then }) => {
        given("que o usuário acessou a página de Pessoa", async () => {
            const titulo = await page.title();
            expect(titulo).toBe("Cadastro de Pessoa");
        });

        and("adicionou seu nome, nascimento e cpf", async () => {
            await page.$eval("#idNome", el => el.value = "João da Silva");
            await page.$eval("#idNascimento", el => el.value = "1990-01-01");
            await page.$eval("#idCpf", el => el.value = "07578894099");
        });

        // No .feature a palavra Gravar está entre aspas duplas
        and('clicou em "Gravar"', async () => {
            await page.click("#btnGravar");
        });

        // Mensagem também está entre aspas duplas no .feature
        then('o sistema deve exibir a mensagem "Cadastrado com sucesso!"', async () => {
            await page.waitForSelector("#mensagem", { visible: true });
        });
    });
});