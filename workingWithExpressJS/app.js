const port = 3000;

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


// use method allow us to add new middle ware function
// the third argument, next is a function, a function that will be passed to this function by exprss_js

app.listen(port);
// now with expressJs, we dont need const http = require('http'); & const server = http.createServer(app); step