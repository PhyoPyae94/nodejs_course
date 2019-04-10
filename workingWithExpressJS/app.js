const port = 3000;

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always running');
    next();
});

app.use('/admin', (req, res, next) => {
    console.log('in the another middleware');
    res.send('<h1>Welcome! "admin"</h1>');// send() allow us to send well a response
});

app.use('/', (req, res, next) => {
    console.log('in the another middleware');
    res.send('<h1>Hello express_js!</h1>');// send() allow us to send well a response
});
// use method allow us to add new middle ware function
// the third argument, next is a function, a function that will be passed to this function by exprss_js

app.listen(port);
// now with expressJs, we dont need const http = require('http'); & const server = http.createServer(app); step