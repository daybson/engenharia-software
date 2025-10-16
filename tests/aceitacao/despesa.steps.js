const { defineFeature, loadFeature } = require("jest-cucumber");
const path = require("path");
const puppeteer = require('puppeteer');

// Aumenta o timeout padrão do jest para evitar timeouts em operações de browser
jest.setTimeout(30000);

const feature = loadFeature(path.join(__dirname, "../feature/despesa.feature"));

defineFeature(feature, (test) => {
    let browser, page;
    const filePath = 'http://localhost:3000/despesa.html';

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 20
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

    test("Cadastro bem sucedido", ({ given, and, then }) => {
        given("que o usuário acessou a página de Cadastrar Despesa", async () => {
            const titulo = await page.title();
            expect(titulo).toBe("Cadastrar Despesa");
        });

        and("adicionou descrição, data, valor e selecionou uma categoria", async () => {
            await page.$eval("#idDescricao", el => el.value = "Compra de Material");
            await page.$eval("#idData", el => el.value = "2023-03-15");
            await page.$eval("#idValor", el => el.value = "150.00");
            await page.$eval("#idCategoria", el => el.value = "Alimentação");
        });

        and('clicou em "Gravar"', async () => {
            await page.click("#btnGravar");
        });

        then('o sistema deve exibir a mensagem "Despesa cadastrada com sucesso!"', async () => {
            await page.waitForSelector("#mensagem", { visible: true });
        });
    });

    test("Cadastro mal sucedido", ({ given, and, then }) => {
        given("que o usuário acessou a página de Cadastrar Despesa", async () => {
            const titulo = await page.title();
            expect(titulo).toBe("Cadastrar Despesa");
        });

        and("não adicionou descrição, data, valor e selecionou uma categoria", async () => {
            await page.$eval("#idDescricao", el => el.value = "");
            await page.$eval("#idData", el => el.value = "");
            await page.$eval("#idValor", el => el.value = "");
            await page.$eval("#idCategoria", el => el.value = "");
        });

        and('clicou em "Gravar"', async () => {
            await page.click("#btnGravar");
        });

        then('o sistema deve exibir a mensagem "Campos obrigatórios não foram informados."', async () => {
            await page.waitForSelector("#mensagem", { visible: true });
        });
    });
});