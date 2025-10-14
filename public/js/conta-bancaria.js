document.addEventListener('DOMContentLoaded', () => {
    const formPessoa = document.getElementById("formConta");

    formPessoa.addEventListener('submit', async (event) => {
        event.preventDefault();
        const msgCompra = document.getElementById("mensagem");
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

            if (!response.ok) {
                msgCompra.style.display = "none";
                throw new Error(result.error);
            }
            msgCompra.style.display = "block";
            alert(result.message);
            formPessoa.reset();
        }
        catch (error) {
            console.error("Erro ao enviar formulário", error);
            alert('Erro: ' + error.message);
        }
    });
});