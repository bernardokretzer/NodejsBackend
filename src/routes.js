const express = require('express');
const SolicitacaoController = require('./controllers/SolicitacaoController')

const routes = express.Router();

routes.get('/solicitacao/:id', SolicitacaoController.get);
routes.get('/solicitacoes', SolicitacaoController.getAll);
routes.get('/solicitacaoFiltro/:solicitacao_status', SolicitacaoController.getByStatus);
routes.get('/solicitacoes/Filtro/:nome_solicitante/:desc_item/:solicitacao_status', SolicitacaoController.getFiltro);
routes.post('/solicitacao', SolicitacaoController.insert);
routes.put('/solicitacao/update/:id', SolicitacaoController.update);

module.exports = routes;