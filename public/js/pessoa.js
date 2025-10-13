document.addEventListener('DOMContentLoaded', () => {
    const formPessoa = document.getElementById("formPessoa");

    formPessoa.addEventListener('submit', async (event) => {
        event.preventDefault();

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

            if (!response.ok) {
                throw new Error(result.error);
            }

            alert(result.message);
            formPessoa.reset();
        }
        catch (error) {
            console.error("Erro ao enviar formulário", error);
            alert('Erro: ' + error.messsage);
        }
    });
});