const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono//com callback
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// Ler pastas
fs.readdir(__dirname, (err, arquivo) => {
    console.log('conteudos')
    console.log(arquivo)
})