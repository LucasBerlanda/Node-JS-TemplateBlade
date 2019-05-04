const express = require("express");
const bodyParser = require("body-parser");// pegar parametros do request

const ufController = require('./controllers/UnidadeFederativaController');

const server = express();


server.set("views", __dirname + "/views");// especifica onde estarão os html
server.set("view engine", "blade");// diz que estamos usando EJS para template

server.use(bodyParser.urlencoded({ extended: true }));

server.get('/uf/lista', ufController.lista);

server.get('/uf/cadastro', ufController.cadastro);
server.post('/uf/salvar', ufController.salvar);

server.listen(3000)

