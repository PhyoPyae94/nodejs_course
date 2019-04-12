const port = 3000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 error <br/> Page not found.</h1>');
});


// use method allow us to add new middle ware function
// the third argument, next is a function, a function that will be passed to this function by exprss_js

app.listen(port);
// now with expressJs, we dont need const http = require('http'); & const server = http.createServer(app); step