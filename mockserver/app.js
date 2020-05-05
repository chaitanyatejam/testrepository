const http = require('http');
const hostname = '0.0.0.0';
const port = '3600';

const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello orld');
})

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`)
})

