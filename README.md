# 🏗️ Engenharia de Software — Projeto de Exemplo

Aluno: DAYBSON BERTASSONNI SALLES PAISANTE

Um projeto de estudo que demonstra uma aplicação web full‑stack simples (frontend estático + backend Node.js/Express) com testes unitários, de integração e aceitação.

---

## ✨ Funcionalidades principais

- 🔍 Consulta de cotação do Dólar (via backend)
- 🧑‍💼 Cadastro de Pessoas (Nome, Nascimento, CPF)
- 🏦 Cadastro de Conta Bancária (instituição, conta, agência)
- 🧾 Cadastro de Despesas
- 🧪 Testes: unitários, de integração e de aceitação (Puppeteer + jest-cucumber)

---

## 🚀 Como executar

Pré-requisitos:

- Node.js 14+ (recomendado)
- npm

Instalação e execução:

```powershell
# clonar o repositório
git clone https://github.com/daybson/engenharia-software.git
cd engenharia-software

# instalar dependências
npm install

# iniciar o servidor (será servido em http://localhost:3000)
npm start
```

Abra no navegador: http://localhost:3000

---

## 🗂️ Estrutura de pastas

```
engenharia-software/
├─ package.json
├─ README.md
├─ public/                 # Frontend estático
│  ├─ index.html
│  ├─ pessoa.html
│  ├─ contabancaria.html
│  ├─ despesa.html
│  └─ js/
│     ├─ pessoa.js
│     ├─ conta-bancaria.js
│     └─ despesa.js
├─ src/                    # Backend (Express)
│  ├─ server.js
│  └─ CotacaoService.js
├─ tests/
│  ├─ unitario/            # Testes unitários (Jest)
│  │  ├─ Pessoa.test.js
│  │  ├─ ContaBancaria.test.js
│  │  └─ Despesa.test.js
│  ├─ integracao/          # Testes de integração
│  │  └─ CotacaoService.test.js
│  └─ aceitacao/           # Testes de aceitação (jest-cucumber + Puppeteer)
│     ├─ pessoa.steps.js
│     ├─ contabancaria.steps.js
│     └─ feature/
│        ├─ pessoa.feature
│        └─ contabancaria.feature
└─ coverage/                # Relatórios de cobertura (gerados por jest)
```

---

## 🧪 Testes — tipos e comandos

Este projeto possui três tipos principais de testes:

### 1) Testes unitários (rápidos) ✅
- Onde: `tests/unitario/`
- O que testam: lógica de domínio (ex.: validação, cálculos)
- Como rodar:

```powershell
npm run test
```

> Observação: Esse script executa o Jest padrão e roda todos os testes configurados.


### 2) Testes de integração (serviços) 🔁
- Onde: `tests/integracao/`
- O que testam: integração com serviços internos ou APIs (ex.: CotacaoService)
- Como rodar (juntamente com testes unitários):

```powershell
npm run test
```

### 3) Testes de aceitação / end-to-end (Puppeteer + jest-cucumber) 🌐
- Onde: `tests/aceitacao/` e `tests/feature/`
- O que testam: fluxo do usuário (UI) automatizado via navegador controlado (Puppeteer)
- Observações importantes:
  - O servidor (`npm start`) precisa estar rodando em `http://localhost:3000` antes de executar esses testes.
  - Os testes abrem um navegador (modo não‑headless por padrão no repositório); em CI você pode preferir rodar em headless.

- Como rodar apenas os testes de aceitação:

```powershell
npm run test:acceptance
```

- Dica: se preferir rodar o Jest diretamente com glob (PowerShell requer aspas duplas escapadas):

```powershell
npx jest "**/tests/aceitacao/**/*.steps.js"
```

---

## 📊 Cobertura de testes (coverage)

- O comando de cobertura executa os testes e gera relatórios detalhados de cobertura (linhas, funções, branches).
- Como rodar:

```powershell
npm run test:coverage
```

- Saída esperada:
  - Uma pasta `coverage/` será gerada na raiz do projeto.
  - Relatório HTML navegável em `coverage/lcov-report/index.html` (abra no navegador para visualização detalhada).

- Dica para ver rapidamente no sistema (PowerShell):

```powershell
# abre o relatório HTML padrão no Windows (substitua o caminho se necessário)
Start-Process .\coverage\lcov-report\index.html
```

---

## ✅ Resultado esperado

- Ao rodar `npm run test:acceptance` com o servidor ativo, os scripts controlam um navegador via Puppeteer e verificam os fluxos de cadastro (pessoa, conta bancária, despesa). O relatório final do Jest apresenta quantos testes passaram/falharam.

 ✨
