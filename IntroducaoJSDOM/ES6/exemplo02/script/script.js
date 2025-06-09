// Rest Parameters
function soma(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}

// Generators
function* gerador() {
  yield 1;
  yield 2;
  yield 3;
}

// Spread Operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

// Iterators
const iterador = array1[Symbol.iterator]();
console.log(iterador.next().value); // 1

// Rest/Spread Properties
const obj1 = { a: 1, b: 2, c: 3 };
const { a, ...resto } = obj1;

// Template Strings
const nome = "João";
const mensagem = `Olá, ${nome}! Bem-vindo ao ES6.`;

// Promises
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promessa resolvida!"), 1000);
});

// Classes
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Modules (export/import)
// Crie um arquivo separado para exportar e importar (não mostrado aqui)

// Dynamic Imports
document.getElementById("runExamples").addEventListener("click", async () => {
  const { exemploDinamico } = await import("./dynamicModule.js");
  exemploDinamico();
});

// Exemplo de execução
console.log(soma(1, 2, 3, 4));
const gen = gerador();
console.log(gen.next().value); // 1
console.log(array2);
console.log(resto);
console.log(mensagem);
promessa.then(console.log);
const pessoa = new Pessoa("Maria", 25);
console.log(pessoa.apresentar());
