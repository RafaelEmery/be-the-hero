const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * Rotas e recursos:
 * 
 * Rota: a URL toda
 * Recurso: '/users' ou '/contato'
 * 
 * Request HTTP:
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 * Tipos de parâmetro:
 * 
 * Query: Parâmetros nomeados/enviados na rota após o '?' (filtros, paginação, atributos...)
 * Route: Parâmetros usados para identificar recursos ('users/:1' => 'users/{id} no Laravel)
 * Request Body: Corpo da requisição, usado para criar ou alterar recursos (.json)
 * 
 * Banco de dados:
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*');
 */

/**
 * Entidades:
 * 
 * ONG, casos(incident)
 * 
 * Funcionalidades:
 * 
 * Web: Login, logout e cadastro de ONG; Cadastrar, listar e deletar casos de uma ONG;
 * Mobile: Listar todos os casos; Entrar em contato com a ONG (WhatsApp e Email)
 */

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);