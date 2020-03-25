const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Transforma toda requisição em formato json para toda aplicação
app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Tipos de parâmentros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * Response
 * 
 * ex: '/users/:id'
 * 
 * SQL: Mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() // KNEX.JS  http://knexjs.org
 * */

/**
 * Rotas encontra-se no arquivo routes.js
*/