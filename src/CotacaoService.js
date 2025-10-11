const axios = require('axios');

class CotacaoService {
    async obterCotacao() {
        try {
            const url = 'https://economia.awesomeapi.com.br/json/last/USD';
            const response = await axios.get(url);

            if (response.data && response.data.USDBRL && response.data.USDBRL.bid)
                return response.data.USDBRL.bid;
            else
                throw new Error("Formato de resposta inválido");
        }
        catch (error) {
            throw new Error("Não foi possível obter cotação do dólar");
        }
    }
}

module.exports = CotacaoService;