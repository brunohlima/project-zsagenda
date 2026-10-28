
# ZS Agenda - Testes Automatizados

Projeto de estudos em **Qualidade de Software (QA)**, com foco na automação de testes do fluxo de login utilizando Playwright e JavaScript.

O objetivo é praticar a criação e execução de testes automatizados, documentar cenários de teste e organizar evidências dos resultados.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Playwright
- Git e GitHub

## Cenários de teste

| ID | Cenário | Objetivo |
|---|---|---|
| CT-000 | Acesso à tela de login | Verificar se a tela de login é carregada corretamente. |
| CT-001 | Campos vazios | Verificar o comportamento do login sem preencher os campos obrigatórios. |
| CT-002 | E-mail válido e senha inválida | Verificar o comportamento ao informar uma senha incorreta. |
| CT-003 | E-mail inválido e senha válida | Verificar a validação de um endereço de e-mail inválido. |
| CT-004 | Login com sucesso | Verificar o acesso com credenciais válidas. |

## Estrutura do projeto

```text
project-zsagenda/
├── docs/
│   ├── evidências/
│   └── cenarios-de-teste-login.md
├── tests/
│   └── login/
│       ├── acesso-zsagenda.spec.js
│       ├── campos-vazios.spec.js
│       ├── email-invalido-senha-valida.spec.js
│       ├── email-valido-senha-invalida.spec.js
│       └── login-com-sucesso.spec.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Como executar o projeto

### 1. Pré-requisitos

- Node.js instalado
- npm instalado
- Git instalado

### 2. Clonar o repositório

```bash
git clone https://github.com/brunohlima/project-zsagenda.git
```

Entre na pasta do projeto:

```bash
cd project-zsagenda
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar os testes

Para executar os testes no Chromium:

```bash
npx playwright test --project=chromium
```

Para executar os testes com o navegador visível:

```bash
npx playwright test --project=chromium --headed
```

## Evidências de teste

As evidências dos cenários estão disponíveis na pasta `docs/evidências/`.

A documentação dos cenários de teste pode ser encontrada em:

`docs/cenarios-de-teste-login.md`

## Aprendizados

Durante o desenvolvimento deste projeto, estou praticando:

- Criação e organização de testes automatizados.
- Uso de seletores e interações com elementos da página.
- Validação de resultados com assertions.
- Execução de testes com Playwright.
- Documentação de cenários de teste.
- Organização de evidências.
- Versionamento de código com Git e GitHub.

## Próximos passos

- Ampliar a cobertura dos testes de login.
- Melhorar a validação dos resultados esperados.
- Aprimorar a documentação dos casos de teste.
- Estudar novos recursos do Playwright.
- Evoluir a estrutura do projeto conforme avanço nos estudos.

## Autor

**Bruno Lima**

Projeto desenvolvido para fins de estudo e evolução profissional na área de Qualidade de Software (QA).

[GitHub](https://github.com/brunohlima)
