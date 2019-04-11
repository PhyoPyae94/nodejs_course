const port = 3000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="message"><button type="submit">Add product</button></form></body></html>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello express_js!</h1>');// send() allow us to send well a response
});
// use method allow us to add new middle ware function
// the third argument, next is a function, a function that will be passed to this function by exprss_js

app.listen(port);
// now with expressJs, we dont need const http = require('http'); & const server = http.createServer(app); step