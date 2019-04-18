const moduloA = require("../../moduloa");
console.log(moduloA)

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia');
    res.end();
}).listen(8080);

console.log