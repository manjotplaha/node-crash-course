const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {        //request, response
    console.log(req.url, req.method, req.headers);
    // res.end('Request received');

    //set header content type
    // res.setHeader('Content-Type', 'text/plain');

    // res.write('Hello, World!');

    res.setHeader('Content-Type', 'text/html');
    // res.write('<p>Hello, World!</p>');
    // res.end();

    //send html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });
});

//server listening on port 3000 => 127.0.0.1
server.listen(3000, 'localhost', () => {
    console.log('Server listening on port 3000');
});