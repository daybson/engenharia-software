document.addEventListener('DOMContentLoaded', () => {
    const formPessoa = document.getElementById("formDespesa");

    formPessoa.addEventListener('submit', async (event) => {
        event.preventDefault();
        const mensagemOperacao = document.getElementById("mensagem");
        const descricao = document.getElementById('idDescricao').value;
        const data = document.getElementById('idData').value;
        const valor = document.getElementById('idValor').value;
        const categoria = document.getElementById('idCategoria').value;

        const dados = {
            descricao: descricao,
            data: data,
            valor: valor,
            categoria: categoria
        };

        try {
            const response = await fetch('http://localhost:3000/despesa', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            const result = await response.json();
            const texto = result && (result.message || result.error || JSON.stringify(result));
            if (mensagemOperacao) {
                mensagemOperacao.textContent = texto || '';
                if (response.ok) {
                    mensagemOperacao.classList.remove('text-danger');
                    mensagemOperacao.classList.add('text-success');
                    formPessoa.reset();
                } else {
                    mensagemOperacao.classList.remove('text-success');
                    mensagemOperacao.classList.add('text-danger');
                }
            }
        }
        catch (error) {
            console.error("Erro ao enviar formulário", error);
            alert('Erro: ' + error.message);
        }
    });
});