'use stric';

const lines = prompt ('Digite os valores de entrada').split(' ');

const soma = (a, b) => a + b;

const resultado = lines.map(Number).reduce(soma);

console.log (`SOMA = ${resultado}`);