const axios = require('axios');

class CotacaoService {
    async obterCotacao() {
        let response; // Define a variável fora do try para que seja acessível depois

        try {
            // 1. A chamada da API é a única coisa que precisa do try...catch
            const url = 'https://economia.awesomeapi.com.br/json/last/USD';
            response = await axios.get(url);
        } catch (error) {
            // Se a chamada de rede falhar, lançamos o erro genérico
            throw new Error("Não foi possível obter cotação do dólar");
        }

        // 2. A validação agora acontece fora do try...catch
        // Se a chamada foi bem-sucedida, validamos a resposta aqui.
        if (response.data && response.data.USDBRL && response.data.USDBRL.bid) {
            return response.data.USDBRL.bid;
        } else {
            // Se o formato estiver errado, lançamos o erro específico
            throw new Error("Formato de resposta inválido");
        }
    }
}

module.exports = CotacaoService;