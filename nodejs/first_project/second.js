let Server = require('http');
require('dotenv').config();

let port_no = process.env.PORT;

let { exec } = require('child_process');
const { start } = require('repl');

Server.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Home Page</h1>
                <ul>
        <li><a href="/">Home page</a></li>
        <li><a href="/about">About page</a></li>
        <li><a href="/contact">Contact page</a></li>
        <li><a href="/services">Services page</a></li>
        <li><a href="/category">Category page</a></li>
        </ul >
            `);
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.end();

    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Contact Page</h1>');
        res.end();
    } else if (req.url === '/services') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Services Page</h1>');
        res.end();
    } else if (req.url === '/category') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Category Page</h1>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
}).listen(port_no, () => {
    console.log(`Server is running on port http://localhost:${port_no}`);
    let u = `http://localhost:${port_no}`;
    if (process.platform === 'win32') {
        exec(`start ${u}`);
    }
})
