const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Usuario = require('../models/Usuario');
const TipoAgendamento = require('../models/TipoAgendamento');
const Status = require('../models/Status');
const Agendamento = require('../models/Agendamento');

const connection = new Sequelize(dbConfig);
Usuario.init(connection);
TipoAgendamento.init(connection);
Status.init(connection);
Agendamento.init(connection);

module.exports = connection;