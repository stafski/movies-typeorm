# Projeto Locadora de Streaming

Este é um projeto de uma locadora de streaming desenvolvido utilizando as seguintes tecnologias: Express, TypeORM, TypeScript, dotenv, zod e PostgreSQL.

## Configuração do Ambiente

Antes de iniciar o projeto, certifique-se de ter as seguintes dependências instaladas:

- Node.js
- PostgreSQL

## Instalação

1. Clone este repositório em sua máquina local.
2. Execute o comando npm install ou yarn install para instalar as dependências do projeto.
3. Renomeie o arquivo .env.example para .env e preencha as variáveis de ambiente necessárias, como a DATABASE_URL para a conexão com o banco de dados PostgreSQL.

## Como iniciar

1. Clone este repositório.
2. Navegue até a pasta do projeto e execute no terminal `npm install` para instalar as dependências.
3. Inicie o servidor digitando `npm run dev` no terminal.
4. A API agora está disponível em `http://localhost:3000`.

## Banco de Dados

Certifique-se de ter um banco de dados **PostgreSQL** configurado e atualize a variável **DATABASE_URL** no arquivo **.env** com as informações corretas de conexão.
Execute as migrações para criar a tabela movies no banco de dados:

```
npm run typeorm migration:run
```

## Executando o Projeto

Para iniciar o servidor, execute o seguinte comando:

```
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## Endpoints

A API possui os seguintes endpoints:

- POST /movies: Cadastra um novo filme.
- GET /movies: Lista todos os filmes cadastrados com suporte a paginação.
- PATCH /movies/:id: Atualiza um filme existente pelo ID.
- DELETE /movies/:id: Deleta um filme existente pelo ID.

## Autor

- Leonardo Stafski (https://github.com/stafski)
