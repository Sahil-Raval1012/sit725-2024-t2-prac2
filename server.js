const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method === 'GET' && parsedUrl.pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else (req.method === 'POST' && parsedUrl.pathname === '/'); {

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = querystring.parse(body);
            const name = parsedBody.name || 'World';
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<html><body><h1>Welcome to the page,, ${name}!</h1></body></html>`);
        });
    } 
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});





