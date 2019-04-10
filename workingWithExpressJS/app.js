const http = require('http');
const port = 3000;

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next(); //along the request to continue to the next middleware in line
});
app.use((req, res, next) => {
    console.log('in the another middleware');
});
// use method allow us to add new middle ware function
// the third argument, next is a function, a function that will be passed to this function by exprss_js
const server = http.createServer(app);

server.listen(port);