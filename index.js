const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);


const port = 9000;

server.listen(port, ()=> console.log(`Server Start at ${port}`)
);