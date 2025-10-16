document.addEventListener('DOMContentLoaded', () => {
    const formPessoa = document.getElementById("formPessoa");

    if (!formPessoa) return;

    formPessoa.addEventListener('submit', async (event) => {
        event.preventDefault();
        const mensagemOperacao = document.getElementById("mensagem");
        const nome = document.getElementById('idNome').value;
        const nascimento = document.getElementById('idNascimento').value;
        const cpf = document.getElementById('idCpf').value;

        const dadosPessoa = {
            nome: nome,
            cpf: cpf,
            nascimento: nascimento
        };

        try {
            const response = await fetch('http://localhost:3000/pessoa', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(dadosPessoa)
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