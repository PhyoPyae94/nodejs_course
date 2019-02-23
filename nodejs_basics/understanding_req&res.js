const http = require('http');
const port =3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>nodejs server running</title></head>');
    res.write('<body><h1>Hello From Nodejs Server</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(port);