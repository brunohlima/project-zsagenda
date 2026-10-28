# Testes Manuais - Login ZSAgenda

## CT-000 — Abertura da página de login

**Objetivo:** Verificar se a página de login do ZSAgenda é carregada corretamente e se o botão Acessar está visível.

**Pré-condições:** Possuir acesso à URL da página de login.

**Passos para execução:**

1. **Dado** que o usuário tenha acesso à URL de login do ZSAgenda.
2. **Quando** acessar a página de login.
3. **Então** o sistema deverá carregar a página e exibir o botão **Acessar**.

**Resultado esperado:** A página de login deverá ser carregada corretamente e o botão Acessar deverá estar visível.

**Resultado obtido:** A preencher após a execução do teste.

**Status:** Passou.

---

## CT-001 — Campos vazios

**Objetivo:** Verificar se o sistema valida campos vazios e impede o login sem o preenchimento dos dados.

**Pré-condições:** Estar na página de login.

**Passos para execução:**

1. **Dado** que o usuário esteja na página de login.
2. **Quando** deixar os campos de e-mail e senha vazios e clicar no botão **Acessar**.
3. **Então** o sistema não deverá permitir o login e deverá exibir mensagens de validação.

**Resultado esperado:** O sistema deverá exibir as mensagens “E-mail inválido” e “informe a senha”.

**Resultado obtido:** O sistema exibiu as mensagens “E-mail inválido” e “informe a senha”.

**Status:** Passou.

---

## CT-002 — E-mail válido e senha inválida

**Objetivo:** Verificar se o sistema impede o login quando a senha informada está incorreta.

**Pré-condições:** Estar na página de login e possuir um e-mail válido para teste.

**Passos para execução:**

1. **Dado** que o usuário esteja na página de login.
2. **Quando** inserir um e-mail válido.
3. **E** inserir uma senha inválida e clicar no botão **Acessar**.
4. **Então** o sistema não deverá permitir o login e deverá exibir uma mensagem de erro.

**Resultado esperado:** O sistema deverá exibir a mensagem “E-mail ou senha incorretos.”

**Resultado obtido:** O sistema exibiu a mensagem “E-mail ou senha incorretos.”

**Status:** Passou.

---

## CT-003 — E-mail inválido e senha válida

**Objetivo:** Verificar se o sistema impede o login quando o e-mail informado possui um formato inválido, sem o caractere `@`.

**Pré-condições:** Estar na página de login.

**Passos para execução:**

1. **Dado** que o usuário esteja na página de login.
2. **Quando** inserir um e-mail com formato inválido.
3. **E** inserir uma senha válida e clicar no botão **Acessar**.
4. **Então** o sistema não deverá permitir o login e deverá exibir uma mensagem de erro.

**Resultado esperado:** O sistema deverá exibir a mensagem “E-mail ou senha incorretos.”

**Resultado obtido:** O sistema exibiu a mensagem “E-mail ou senha incorretos.”

**Status:** Passou.

---

## CT-004 — E-mail e senha válidos

**Objetivo:** Verificar se o sistema permite o login com credenciais válidas e redireciona o usuário para a página de Visão Geral.

**Pré-condições:** Possuir credenciais válidas e estar na página de login.

**Passos para execução:**

1. **Dado** que o usuário esteja na página de login.
2. **Quando** inserir um e-mail válido.
3. **E** inserir uma senha válida e clicar no botão **Acessar**.
4. **Então** o sistema deverá permitir o login e redirecionar o usuário para a página de Visão Geral e apresentar Login realizado com sucesso!.

**Resultado esperado:** O usuário deverá acessar o sistema e ser redirecionado para a página de Visão Geral.

**Resultado obtido:** O sistema redirecionou o usuário para a página de Visão Geral.

**Status:** Passou.

---