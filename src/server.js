//importar dependência
const express = require('express');
const path = require('path');

//iniciando o express
const server = express();
server

//utilizando arquivos estáticos
.use(express.static('src/views'))

//criar uma rota
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
} )

//ligar o servidor
server.listen(5500)