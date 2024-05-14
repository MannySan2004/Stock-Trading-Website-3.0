'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    let filePath = '.' + req.url; // Base file path from the URL
    if (filePath === './') {
        filePath = './index.html'; // Default to index.html if no file is specified
    }

    // Check if the request is for a specific file
    switch (filePath) {
        case './Style1.css':
            filePath = './Style1.css';
            break;
        case './Style2.css':
            filePath = './Style2.css';
            break;
        case './Script1.js':
            filePath = './Script1.js';
            break;
        case './trading-view.html':
            filePath = './trading-view.html';
            break;
        case './crypto-view.html':
            filePath = './crypto-view.html';
            break;
        case './mission-statement.html':
            filePath = './mission-statement.html';
            break;
        case './chart-view.html': // Add new case for 'chart-view.html'
            filePath = './homepage.html';
            break;
        default:
            break; // No change, serve as requested
    }

    // Determine the appropriate content type based on the file extension
    const extname = path.extname(filePath);
    let contentType = 'text/html'; // Default content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'; // Correct MIME type for JavaScript
            break;
        case '.css':
            contentType = 'text/css'; // Correct MIME type for CSS
            break;
    }

    // Read and serve the file
    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found, send 404
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                // Server error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server error: ' + error.code);
            }
        } else {
            // Successful, serve file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);
