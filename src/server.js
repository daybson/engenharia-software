const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors'); // Importa o CORS

const app = express();

app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json()); // Habilita o Express para entender o corpo de requisições em JSON

const CotacaoService = require('./CotacaoService'); // Importa a nova classe
const cotacaoService = new CotacaoService(); // Cria uma instância do serviço

const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/cotacao-dolar', async (req, res) => {
    try {
        const cotacao = await cotacaoService.obterCotacao();
        res.json({ valor: cotacao });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/pessoa', (req, res) => {
    const { nome, nascimento, cpf } = req.body;

    if (!nome || !nascimento || !cpf) {
        return res.status(400).json({ error: "Campos obrigatórios não foram informados." });
    }

    //salva no banco ...
    console.log("salvando no banco: " + nome);

    res.status(201).json({ message: 'Pessoa cadastrada com sucesso!' });
});

app.post('/conta-bancaria', (req, res) => {
    const { nome, numeroConta, digitoConta, numeroAgencia, digitoAgencia } = req.body;

    if (!nome || !numeroConta || !digitoConta || !numeroAgencia || !digitoAgencia) {
        return res.status(400).json({ error: "Campos obrigatórios não foram informados." });
    }

    //salva no banco ...
    console.log("salvando no banco: " + nome);

    res.status(201).json({ message: 'Conta bancária cadastrada com sucesso!' });
});


app.post('/despesa', (req, res) => {
    const { descricao, data, valor, categoria } = req.body;

    if (!descricao || !data || !valor || !categoria) {
        return res.status(400).json({ error: "Campos obrigatórios não foram informados." });
    }

    //salva no banco ...
    console.log("salvando no banco: " + descricao);

    res.status(201).json({ message: 'Despesa cadastrada com sucesso!' });
});


app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:${port}');
});