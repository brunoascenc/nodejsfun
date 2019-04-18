//Funcinario mulher da china com o menor salario

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const origem = f => f.pais === 'China';
const mulher = f => f.genero === 'F';
const salario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const func = funcionarios
        .filter(origem)
        .filter(mulher)
        .reduce(salario)

    console.log(func);
});
