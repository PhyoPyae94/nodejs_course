const http = require('http');
const port = 3000;

// function rqListener(req, res) {
//     *** we can also use anonymous function instead of this function ***
// }

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(port);