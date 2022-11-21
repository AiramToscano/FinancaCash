# FinançasCash

# Projeto realizado para o processo Seletivo NG


## Projeto FinançasCash:
O desafio do projeto é estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.

## As tecnologias utilizadas:

#### BackEnd:
* Servidor Node.js utilizando Typescript.
* ORM Sequelize.
* Bancos de dados PostgreSQL.

#### FrontEnd:
* Servidor React Typescript.
* CSS Modules.
 
## Para utilizar o projeto :
Nesse projeto foi feita a integração do backend e do frontend utilizando docker-compose, logo é preciso ter o npm ou yarn e o docker instalado na máquina.
- `git clone git@github.com:AiramToscano/FinancaCash.git`

Dentro da pasta /app:
- `npm run compose:up`

Caso queria rodar sem docker:

Backend:

- `npm run dev` - Esse comando roda o cli-sequelize e logo depois sobe o servidor Node. Obs: caso deseje rodar sem docker, você precisar ter o banco postgres instalado na maquina.

FronEnd:

- `npm run start`

### BackEnd:
- A construção do back-end foi feita na visão do modelo arquitetural MSC e utilizando princípios POO, ESLINT e além de utilizar alguns princípios SOLID.

Logo o backend foi construido:
- src
  - controllers - responsável validar regras de negocios de um aplicação, integração com a camada service.
  - database - responsável pela criação do banco de dados postgres e o ORM sequelize.
  - interfaces - responsavél pelo contrato que os métodos de um objeto deve suportar.
  - repository - responsável pela comunicação com o banco de dados postgres.
  - routes - responsavel pela criação de rotas das api do projeto.
  - services - validar regras de negócios de uma aplicação.
  - utils - responsavel pela validação de algumas regras de negócio e a criação do jwt.
  - app.ts - criação do servidor
  - server.ts - criação do servidor
  
### FrontEnd:
- A construção do frontEnd foi feita Utilizando typescript e ESLINT.

Logo o frontend foi construido:
- src
  - componentes - responsável por criar alguns componentes utilizados durante o projeto.
  - interfaces - responsavél pelo contrato que os métodos de um objeto deve suportar.
  - pages - paginas que são utilizadas no projeto.
  - pagesCss - arquivos de estilização do projeto.
  - utils - responsavel pela para criar a comunicação com o backEnd.
  - index.tsx - criação do servidor.


