const http = require('http');
const port = 3000;
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);


server.listen(port);