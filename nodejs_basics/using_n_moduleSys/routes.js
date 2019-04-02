const fs = require('fs');



const requestHandler = (req, res) => {
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
};

// module.exports = (requestHandler);

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';