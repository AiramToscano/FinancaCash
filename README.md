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
  - controllers - Responsável validar regras de negocios de um aplicação, integração com a camada service.
  - database - Responsável pela criação do banco de dados postgres e o ORM sequelize.
  - interfaces - Responsável pelo contrato que os métodos de um objeto deve suportar.
  - repository - Responsável pela comunicação com o banco de dados postgres.
  - routes - Responsavel pela criação de rotas das api do projeto.
  - services - Validar regras de negócios de uma aplicação.
  - utils - Responsavel pela validação de algumas regras de negócio e a criação do jwt.
  - app.ts - Criação do servidor
  - server.ts - Criação do servidor
  
### FrontEnd:
- A construção do frontEnd foi feita Utilizando typescript e ESLINT.

Logo o frontend foi construido:
- src
  - componentes - Responsável por criar alguns componentes utilizados durante o projeto.
  - interfaces - Responsavél pelo contrato que os métodos de um objeto deve suportar.
  - pages - Paginas que são utilizadas no projeto.
  - pagesCss - Arquivos de estilização do projeto.
  - utils - Responsavel pela para criar a comunicação com o backEnd.
  - index.tsx - Criação do servidor.

## Pontos a melhorar:

  - Acredito que para uma aplicação ser completa, necessita de ter testes, infelizmente por conta de alguns imprevistos durante a semana, não pude fazer os testes na aplicação de backEnd e frontEnd, pretendo construir os testes futuramente.
  - Na aplicação de frontend, acredito que poderia ter mais componentes, repetir muito código desnecessário, acredito que para uma aplicação muito grande, é essencial a componentização de componentes.
  - Na aplicação total, acredito que possa melhorar o nomes das minhas rotas, algo mais prático.



