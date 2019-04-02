const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write("<html>");
        res.write('<header><title>Message</title></header>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>nodejs server running</title></head>');
    res.write('<body><h1>Hello From Nodejs Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(port);

//on() => listen to certain events