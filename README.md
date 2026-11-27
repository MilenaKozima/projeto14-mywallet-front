# MyWallet (front-end)

Aplicação web de controle financeiro pessoal: o usuário cria uma conta, faz login e acompanha suas entradas e saídas com o saldo atualizado. Consome a API do [MyWallet back-end](https://github.com/MilenaKozima/projeto14-mywallet-back).

## Tecnologias

- React 18 e Vite
- React Router (rotas)
- Axios (requisições à API)
- styled-components (estilização)
- Context API (estado de autenticação) e hooks customizados

## Funcionalidades

- Cadastro e login, com o token salvo no `localStorage`
- Listagem das transações com cálculo do saldo
- Registro de novas entradas e saídas
- Logout
- Redirecionamento para o login quando não há sessão

## Páginas

| Rota | Página |
|---|---|
| `/` | Login |
| `/cadastro` | Cadastro |
| `/home` | Transações e saldo |
| `/nova-transacao/:type` | Nova entrada ou saída |

## Como rodar

Antes, deixe a API do MyWallet rodando.

```bash
git clone https://github.com/MilenaKozima/projeto14-mywallet-front.git
cd projeto14-mywallet-front
npm install
```

Crie um arquivo `.env` na raiz (veja `.env.example`):

```
VITE_API_URL=http://localhost:5000
```

```bash
npm run dev
```
