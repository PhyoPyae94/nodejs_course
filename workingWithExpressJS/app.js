const http = require('http');
const port = 3000;

const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(port);