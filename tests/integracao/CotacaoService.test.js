const CotacaoService = require('../../src/CotacaoService');
const axios = require('axios');

jest.mock('axios');

describe('CotacaoService', () => {
    let cotacaoService;

    beforeEach(() => {
        cotacaoService = new CotacaoService();
        axios.get.mockClear();
    });


    test('deve retornar a cotação do dólar com sucesso', async () => {
        const mockApiResponse = {
            data: {
                USDBRL: {
                    bid: '5.40'
                }
            }
        };
        axios.get.mockResolvedValue(mockApiResponse);

        const cotacao = await cotacaoService.obterCotacao();

        expect(cotacao).toBe('5.40');
    });

    test('deve lançar um erro se a chamada à API falhar', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValue(new Error(errorMessage));

        await expect(cotacaoService.obterCotacao())
            .rejects
            .toThrow('Não foi possível obter cotação do dólar');
    });

});