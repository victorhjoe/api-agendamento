const express = require('express');
const UsuarioController = require('./src/controller/UsuarioController');
const usuarioController = new UsuarioController();

const TipoAgendamentoController = require('./src/controller/TipoAgendamentoController');
const tipoAgendamentoController = new TipoAgendamentoController();

const StatusController = require('./src/controller/StatusController');
const statusController = new StatusController();

const AgendamentoController = require('./src/controller/AgendamentoController');
const agendamentoController = new AgendamentoController();

const routes = express.Router();

routes.get('/usuarios', usuarioController.obterTodos);
routes.post('/usuarios', usuarioController.cadastrar);
routes.put('/usuarios/:id', usuarioController.atualizar);
routes.delete('/usuarios/:id', usuarioController.deletar);

routes.get('/tipo-agendamento', tipoAgendamentoController.obterTodos);
routes.get('/tipo-agendamento/:id', tipoAgendamentoController.obterPorId);
routes.post('/tipo-agendamento', tipoAgendamentoController.cadastrar);
routes.put('/tipo-agendamento/:id', tipoAgendamentoController.atualizar);
routes.delete('/tipo-agendamento/:id', tipoAgendamentoController.deletar);

routes.get('/status', statusController.obterTodos);
routes.get('/status/:id', statusController.obterPorId);
routes.post('/status', statusController.cadastrar);
routes.put('/status/:id', statusController.atualizar);
routes.delete('/status/:id', statusController.deletar);

routes.get('/agendamento', agendamentoController.obterTodos);
routes.get('/agendamento/:id', agendamentoController.obterPorId);
routes.post('/agendamento', agendamentoController.cadastrar);
routes.put('/agendamento/:id', agendamentoController.atualizar);
routes.delete('/agendamento/:id', agendamentoController.deletar);


routes.get('/', (request, response) => {
    response.send('API em desenvolvimento!!');
});


module.exports = routes;