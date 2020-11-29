'use stric';

const lines = prompt ('Digite os valores de entrada').split(' ');


const soma = ([A, B]) => Number(A) + Number(B);

console.log (`SOMA = ${soma(lines)}`);