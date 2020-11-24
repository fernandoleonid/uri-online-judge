'use stric';

const lines = prompt ('Digite os valores de entrada').split(' ');

const raio = Number(lines[0]);
const pi = 3.14159;
const area = pi * raio ** 2;

console.log (`A=${area.toFixed(4)}`);