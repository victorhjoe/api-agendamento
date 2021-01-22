require('dotenv').config();
const express = require('express');
const server = express();
const routes = require('./routes');
require('./src/database');

server.use(express.json());
server.use(routes);

server.listen(3000, ()=>console.log("Api rodando na porta 3000"));