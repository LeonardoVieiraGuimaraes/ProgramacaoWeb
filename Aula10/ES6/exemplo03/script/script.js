// Exemplo com var
if (true) {
  var bola = 0; // 'var' não respeita o escopo de bloco
}
console.log("Com var, bola:", bola); // Funciona, pois 'var' é acessível globalmente

// Exemplo com let
if (true) {
  let bola = 0; // 'let' respeita o escopo de bloco
  console.log("Dentro do bloco, bola:", bola); // Funciona dentro do bloco
}
try {
  console.log(bola); // Lança um erro, pois 'let' não é acessível fora do bloco
} catch (error) {
  console.log("Erro ao acessar bola fora do bloco:", error.message);
}

function sum(numero1, numero2) {
  return numero1 + numero2;
}
var soma;
soma = sum(5, 4);
console.log(soma);

var sum = function sum(numero1, numero2) {
  return numero1 + numero2;
};
var soma = sum(5, 4);
console.log(soma);

var sum = function (numero1, numero2) {
  return numero1 + numero2;
};

var sum = (numero1, numero2) => {
  return numero1 + numero2;
};
var soma = sum(5, 4);
console.log(soma);

var sum = (numero1, numero2) => numero1 + numero2;
var soma = sum(5, 4);
console.log(soma);

// const colors = ["red", "green", "yellow"];
// const red = colors[0];
// console.log(red);
// const dog = { name: "Joe", owner: "Carlos" };
// const name = dog.name;
// console.log(name);

const colors = ["red", "green", "yellow"];
const [red, green, yellow] = colors;
console.log(green);

const city = { name: "Ribeirao Preto", temperature: 42 };
const { name, temperature } = city;
console.log(name);

// const setup = (options) => {
//   options = options || {};
// };

const setup = (options = {}) => {};
