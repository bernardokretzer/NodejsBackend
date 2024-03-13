const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Solicitacao = require('../models/Solicitacao')
const connection = new Sequelize(dbConfig);

Solicitacao.init(connection);
module.exports = connection;