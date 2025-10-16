const { defineFeature, loadFeature } = require("jest-cucumber");
const path = require("path");
const puppeteer = require('puppeteer');

// Aumenta o timeout padrão do jest para evitar timeouts em operações de browser
jest.setTimeout(30000);

const feature = loadFeature(path.join(__dirname, "../feature/contabancaria.feature"));

defineFeature(feature, (test) => {
    let browser, page;
    const filePath = 'http://localhost:3000/contabancaria.html';

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
        given("que o usuário acessou a página de Conta bancaria", async () => {
            const titulo = await page.title();
            expect(titulo).toBe("Cadastro de Conta bancaria");
        });

        and("adicionou nome, número da conta, dígito da conta, número da agência, dígito da agência", async () => {
            await page.$eval("#idInstituicao", el => el.value = "Banco do Brasil");
            await page.$eval("#idNumeroConta", el => el.value = "123456");
            await page.$eval("#idDigitoConta", el => el.value = "7");
            await page.$eval("#idAgencia", el => el.value = "1234");
            await page.$eval("#idDigitoAgencia", el => el.value = "5");
        });

        and('clicou em "Gravar"', async () => {
            await page.click("#btnGravar");
        });

        then('o sistema deve exibir a mensagem "Conta bancária cadastrada com sucesso!"', async () => {
            await page.waitForSelector("#mensagem", { visible: true });
        });
    });

    test("Cadastro mal sucedido", ({ given, and, then }) => {
        given("que o usuário acessou a página de Conta bancaria", async () => {
            const titulo = await page.title();
            expect(titulo).toBe("Cadastro de Conta bancaria");
        });

        and("não adicionou nome, número da conta, dígito da conta, número da agência, dígito da agência", async () => {
            await page.$eval("#idInstituicao", el => el.value = "");
            await page.$eval("#idNumeroConta", el => el.value = "");
            await page.$eval("#idDigitoConta", el => el.value = "");
            await page.$eval("#idAgencia", el => el.value = "");
            await page.$eval("#idDigitoAgencia", el => el.value = "");
        });

        and('clicou em "Gravar"', async () => {
            await page.click("#btnGravar");
        });

        then('o sistema deve exibir a mensagem "Campos obrigatórios não foram informados."', async () => {
            await page.waitForSelector("#mensagem", { visible: true });
        });
    });
});