// Aguarda o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', () => {

    const spanCotacaoInicial = document.getElementById('cotacao-inicial');

    async function carregarCotacaoInicial() {
        try {
            const response = await fetch('/cotacao-dolar');
            if (!response.ok)
                throw new Error('Falha ao buscar dados');

            const data = await response.json();
            const valorFormatado = parseFloat(data.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            spanCotacaoInicial.textContent = valorFormatado;
        } catch (error) {
            console.error("Erro ao carregar cotação inicial:", error);
            spanCotacaoInicial.textContent = "Erro!";
            spanCotacaoInicial.classList.remove('text-success');
            spanCotacaoInicial.classList.add('text-danger');
        }
    }

    // Chama a função para carregar a cotação assim que o DOM estiver pronto
    carregarCotacaoInicial();
});