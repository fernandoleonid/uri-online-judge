const lines = prompt ('Digite os valores de entrada').split(' ');

const [A, B] = lines.map(Number);

const X = A + B;

console.log (`X = ${X}`);