const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

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


app.listen(port, () => { });