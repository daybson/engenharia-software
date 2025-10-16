document.addEventListener('DOMContentLoaded', () => {
    const formPessoa = document.getElementById("formConta");

    formPessoa.addEventListener('submit', async (event) => {
        event.preventDefault();
        const mensagemOperacao = document.getElementById("mensagem");
        const nome = document.getElementById('idInstituicao').value;
        const numeroConta = document.getElementById('idNumeroConta').value;
        const digitoConta = document.getElementById('idDigitoConta').value;
        const numeroAgencia = document.getElementById('idAgencia').value;
        const digitoAgencia = document.getElementById('idDigitoAgencia').value;

        const dados = {
            nome: nome,
            numeroConta: numeroConta,
            digitoConta: digitoConta,
            numeroAgencia: numeroAgencia,
            digitoAgencia: digitoAgencia
        };

        try {
            const response = await fetch('http://localhost:3000/conta-bancaria', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            const result = await response.json();
            const texto = result && (result.message || result.error || JSON.stringify(result));
            if (mensagemOperacao) {
                console.log('Resultado da operação OK:', texto);
                mensagemOperacao.textContent = texto || '';
                if (response.ok) {
                    mensagemOperacao.classList.remove('text-danger');
                    mensagemOperacao.classList.add('text-success');
                    formPessoa.reset();
                } else {
                    console.log('Resultado da operação ERRO:', texto);
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