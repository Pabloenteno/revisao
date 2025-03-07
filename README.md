Revisão 3º ano 

Este é um trabalho de revisão para o inicio do 3º ano do ensino médio com técnico em desenvolvimento de sistemas (senac) onde construimos individualmente uma aplicação com cadastro ,listagem, edição e remoção de veiculos.

## Tecnologias Utilizadas

- Node.js
- npm
- nodemon
- cors
- mysql2
- Express
- MySQL
- GitBash

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL.
   ```env
    create database veiculo;
    use veiculo;

    create table veiculos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) UNIQUE NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    cor VARCHAR(20) NOT NULL,
    dono VARCHAR(100) NOT NULL
    );
   ```
2. Configure as credenciais do banco no arquivo `./db-config`:
   ```env
   DB_HOST=localhost
   DB_USER=seu-usuario
   DB_PASSWORD=sua-senha
   DB_NAME=seu-banco
   ```

## Executando o Projeto

Para iniciar o servidor, execute:
```sh
npm start
```
O servidor estará rodando em `http://localhost:3002`

## Endpoints Principais

- `GET /buscar` - Lista os dados do veiculo pela placa.
- `POST /cadastrar` - Cria um novo veiculo.
- `PUT /editar` - Atualiza a placa de um veiculo existente.
- `DELETE /excluir` - Remove um veiculo.


