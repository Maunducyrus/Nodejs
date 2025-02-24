const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});


server.listen(port, hostname, () => {
    // console.log('Server running at http://${hostname}:${port}/');
    console.log('Hello World');
});

// Lexical grammar - lexical analysis

// They include ;-

// - comments
// - white space
// - identifiers
// - keywords
// - literals
// - punctuators(operators)

function comment() {
    
}