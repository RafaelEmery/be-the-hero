
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

/*
routes.get('/', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana Omnistack',
        aluno: 'Rafael',
        mensagem: 'Olá mundo'
    });
});
*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', OngController.index);
routes.post('/incidents', OngController.create);
routes.delete('/incidents/:id', OngController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
