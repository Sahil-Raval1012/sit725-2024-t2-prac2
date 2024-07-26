const http = require('http');
const fs = require('fs');
const url = require('url');
const request = require('querystring');

const server = http.createServer((req, res) => {
    const Url = url.parse(req.url, true);

    if (req.method === 'GET' && Url.pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'POST' && Url.pathname === '/') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newBody = request.parse(body);
            const name = newBody.name || 'World';
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<html><body><h1>Welcome to the page, ${name}!</h1></body></html>`);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
