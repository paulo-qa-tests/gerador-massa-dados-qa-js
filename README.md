<!-- CABEÇALHO CHAMATIVO -->
<div align="center">
  
  # 🧪 Gerador Profissional de Massa de Dados para QA
  
  ### *Automatize seus testes com dados realistas e controlados* 🚀
  
  [![Node.js Version](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&logo=github&logoColor=white)](CONTRIBUTING.md)
  
  [![CI Status](https://github.com/paulo-qa-tests/gerador-massa-dados-qa-js/actions/workflows/ci.yml/badge.svg)](https://github.com/paulo-qa-tests/gerador-massa-dados-qa-js/actions/workflows/ci.yml)
  [![codecov](https://codecov.io/gh/paulo-qa-tests/gerador-massa-dados-qa-js/branch/main/graph/badge.svg)](https://codecov.io/gh/paulo-qa-tests/gerador-massa-dados-qa-js)
  [![GitHub stars](https://img.shields.io/github/stars/paulo-qa-tests/gerador-massa-dados-qa-js?style=social)](https://github.com/paulo-qa-tests/gerador-massa-dados-qa-js/stargazers)
  
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg" alt="GitHub Actions" width="50" height="50"/>
  
</div>

---

## 🎯 **Para Recrutadores e Tech Leads**

> ⭐ **Diferenciais que você vai encontrar neste projeto:**
> - ✅ Código **limpo, modular e documentado** (padrões de mercado)
> - ✅ **CI/CD completo** com GitHub Actions (automação profissional)
> - ✅ **Testes unitários** com Jest (+85% de cobertura)
> - ✅ **Boas práticas** de QA e Engenharia de Software
> - ✅ **Projeto pronto para produção** (escalável e mantível)

---

## 📖 **Índice**

- [Sobre o Projeto](#-sobre-o-projeto)
- [🎬 Demo Rápida](#-demo-rápida)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Stack Tecnológica](#️-stack-tecnológica)
- [🚀 Começando](#-começando)
- [💻 Como Usar](#-como-usar)
- [📊 Formatos de Saída](#-formatos-de-saída)


---
## 🎬 **Demo Rápida**


```bash
# Clone e execute em 30 segundos
git clone https://github.com/paulo-qa-tests/gerador-massa-dados-qa-js.git
cd gerador-massa-dados-qa-js
npm install
npm start



# 🎉 Saída esperada:
# 🚀 Starting data generation...
# 📊 Configuration: 10 users, 20 products
# ✅ Generated 10 users (10 valid)
# ✅ Generated 20 products (20 valid)
# 💾 Data exported to JSON, CSV, SQL
# ✨ Data generation completed!


🚀 Começando
📋 Pré-requisitos
bash

✅ Node.js 18+ instalado
✅ npm 9+ instalado
✅ Git (opcional, para clonar)

🔧 Instalação
bash

# 1️⃣ Clone o repositório
git clone https://github.com/paulo-qa-tests/gerador-massa-dados-qa-js.git

# 2️⃣ Entre na pasta
cd gerador-massa-dados-qa-js

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Configure as variáveis (opcional)
cp .env.example .env

# 5️⃣ Execute! 🎉
npm start

💻 Como Usar
🎮 Comandos disponíveis
bash

npm start              # Gera massa de dados padrão
npm test               # Executa testes unitários
npm run clean          # Limpa dados gerados
npm run validate       # Valida integridade dos dados

🔧 Configuração customizada

Edite config/settings.json:
json

{
  "default": {
    "outputFormats": ["json", "csv", "sql"],  // Formatos desejados
    "locale": "pt_BR",                        // Idioma dos dados
    "usersQty": 100,                          // Quantidade de usuários
    "productsQty": 500,                       // Quantidade de produtos
    "ordersQty": 200,                         // Quantidade de pedidos
    "seed": 42                                // Reprodutibilidade
  }
}

📊 Formatos de Saída
📄 JSON - Para APIs e microsserviços
json

{
  "id": 4521,
  "name": "Ana Silva",
  "email": "ana.silva@example.com",
  "createdAt": "2024-01-15T10:30:00.000Z"
}

📊 CSV - Para planilhas e análise de dados
csv

id,name,email,createdAt
4521,Ana Silva,ana.silva@example.com,2024-01-15T10:30:00.000Z

🗄️ SQL - Para povoar bancos de dados
sql

INSERT INTO users (id, name, email, created_at) 
VALUES (4521, 'Ana Silva', 'ana.silva@example.com', '2024-01-15 10:30:00');