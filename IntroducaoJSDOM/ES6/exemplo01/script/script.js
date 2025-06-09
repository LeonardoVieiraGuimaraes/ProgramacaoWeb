// Exemplos de métodos do console
console.log("Esta é uma mensagem de log.");
console.error("Esta é uma mensagem de erro.");
console.warn("Esta é uma mensagem de aviso.");
console.info("Esta é uma mensagem informativa.");

// Outros métodos interessantes do console
console.table([
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
]); // Exibe uma tabela
console.group("Grupo de Mensagens"); // Inicia um grupo
console.log("Mensagem dentro do grupo");
console.groupEnd(); // Finaliza o grupo
console.time("Tempo de execução"); // Inicia um cronômetro
for (let i = 0; i < 1000000; i++) {} // Loop para simular processamento
console.timeEnd("Tempo de execução"); // Finaliza o cronômetro

// Exemplo de alerta
alert("Bem-vindo ao exemplo de JavaScript!");

// Outros métodos interessantes do window
window.alert("Exemplo de alerta com window.alert!");
const largura = window.innerWidth; // Largura da janela visível
const altura = window.innerHeight; // Altura da janela visível
console.log(`Largura da janela: ${largura}, Altura da janela: ${altura}`);

window.addEventListener("resize", () => {
  console.log("A janela foi redimensionada!");
});

// Exemplo de algoritmo para imprimir no console do navegador
function exemploAlgoritmo() {
  window.console.log("Olá, este é um exemplo de algoritmo em JavaScript!");
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    soma += i;
    window.console.log(`Soma parcial até ${i}: ${soma}`);
  }
  window.console.log(`Soma total: ${soma}`);
}

// Chamada da função
exemploAlgoritmo();
// case-sensitive,
function exemploVariaveis() {
  var bola;
  bola = 2;

  var BOLA;
  BOLA = 8;

  window.console.log(`Valor de bola: ${bola}`);
  window.console.log(`Valor de BOLA: ${BOLA}`);
}

// Chamada da função
exemploVariaveis();

// Exemplo de variáveis com diferentes tipos de valores
function exemploTiposVariaveis() {
  var x;
  x = 1; // Número inteiro
  window.console.log(`x como inteiro: ${x}`);

  x = 0.05; // Número decimal
  window.console.log(`x como decimal: ${x}`);

  x = "Unidade 5"; // String
  window.console.log(`x como string: ${x}`);

  x = true; // Booleano
  window.console.log(`x como booleano: ${x}`);

  x = null; // Nulo
  window.console.log(`x como null: ${x}`);

  var bolas = [2, 3, 5, 7]; // Array
  window.console.log(`Array bolas: ${bolas}`);
}

// Chamada da função
exemploTiposVariaveis();

// Exemplo de flexibilidade de tipos em variáveis
function exemploFlexibilidadeTipos() {
  var variavel = 42; // Inicialmente um número
  window.console.log(
    `Tipo de variavel: ${typeof variavel}, Valor: ${variavel}`
  );

  variavel = "Agora sou uma string"; // Agora uma string
  window.console.log(
    `Tipo de variavel: ${typeof variavel}, Valor: ${variavel}`
  );

  variavel = true; // Agora um booleano
  window.console.log(
    `Tipo de variavel: ${typeof variavel}, Valor: ${variavel}`
  );

  variavel = { chave: "valor" }; // Agora um objeto
  window.console.log(
    `Tipo de variavel: ${typeof variavel}, Valor: ${JSON.stringify(variavel)}`
  );

  variavel = [1, 2, 3]; // Agora um array
  window.console.log(
    `Tipo de variavel: ${typeof variavel}, Valor: ${variavel}`
  );
}

// Chamada da função
exemploFlexibilidadeTipos();

// Exemplo de tipos de variáveis no JavaScript
function exemploTiposDeVariaveis() {
  var numero = 42; // Tipo: Number
  window.console.log(`Tipo: ${typeof numero}, Valor: ${numero}`);

  var texto = "Olá, mundo!"; // Tipo: String
  window.console.log(`Tipo: ${typeof texto}, Valor: ${texto}`);

  var booleano = true; // Tipo: Boolean
  window.console.log(`Tipo: ${typeof booleano}, Valor: ${booleano}`);

  var indefinido; // Tipo: Undefined
  window.console.log(`Tipo: ${typeof indefinido}, Valor: ${indefinido}`);

  var nulo = null; // Tipo: Object (é um caso especial)
  window.console.log(`Tipo: ${typeof nulo}, Valor: ${nulo}`);

  var objeto = { chave: "valor" }; // Tipo: Object
  window.console.log(
    `Tipo: ${typeof objeto}, Valor: ${JSON.stringify(objeto)}`
  );

  var array = [1, 2, 3]; // Tipo: Object (Array é um objeto)
  window.console.log(`Tipo: ${typeof array}, Valor: ${array}`);

  var funcao = function () {
    return "Sou uma função!";
  }; // Tipo: Function
  window.console.log(`Tipo: ${typeof funcao}, Valor: ${funcao()}`);
}

// Chamada da função
exemploTiposDeVariaveis();

// Exemplos de operadores aritméticos em JavaScript
function exemploOperadoresAritmeticos() {
  var a = 10;
  var b = 3;

  window.console.log(`a = ${a}, b = ${b}`);
  window.console.log(`Adição (a + b): ${a + b}`); // Soma
  window.console.log(`Subtração (a - b): ${a - b}`); // Subtração
  window.console.log(`Multiplicação (a * b): ${a * b}`); // Multiplicação
  window.console.log(`Divisão (a / b): ${a / b}`); // Divisão
  window.console.log(`Módulo (a % b): ${a % b}`); // Resto da divisão
  window.console.log(`Exponenciação (a ** b): ${a ** b}`); // Potência
  window.console.log(`Incremento (++a): ${++a}`); // Incremento
  window.console.log(`Decremento (--b): ${--b}`); // Decremento
}

// Chamada da função
exemploOperadoresAritmeticos();

// Exemplos detalhados de operadores aritméticos
function exemploOperadoresDetalhados() {
  const a = 6;
  const b = 3;
  const c = "5";

  // Multiplicação (*)
  window.console.log(`Multiplicação (a * b): ${a * b}`); // 6 * 3 = 18

  // Subtração (-)
  window.console.log(`Subtração (a - b): ${a - b}`); // 6 - 3 = 3

  // Divisão (/)
  window.console.log(`Divisão (a / b): ${a / b}`); // 6 / 3 = 2
  window.console.log(`Divisão por zero (a / 0): ${a / 0}`); // Infinity
  window.console.log(`Divisão inválida (0 / 0): ${0 / 0}`); // NaN

  // Módulo (%)
  window.console.log(`Módulo (a % b): ${a % b}`); // 6 % 3 = 0
  window.console.log(`Módulo com negativo (-a % b): ${-a % b}`); // -6 % 3 = 0

  // Soma (+)
  window.console.log(`Soma (a + b): ${a + b}`); // 6 + 3 = 9
  window.console.log(`Concatenação (a + c): ${a + c}`); // "6" + "5" = "65"
  window.console.log(
    `Concatenação de strings ("Olá" + " Mundo"): ${"Olá" + " Mundo"}`
  ); // "Olá Mundo"

  // Conversão implícita no operador +
  window.console.log(`Soma com conversão (b + +c): ${b + +c}`); // 3 + 5 = 8 (c é convertido para número)
}

// Chamada da função
exemploOperadoresDetalhados();

// Exemplo de estrutura lógica
function exemploEstruturaLogica() {
  const salario = 950;

  if (salario < 1000) {
    window.console.log("Salário deve ser reajustado.");
  } else {
    window.console.log("Salário está adequado.");
  }
}

exemploEstruturaLogica();

// Exemplo com múltiplas condições
function exemploEstruturaLogicaMultiplas() {
  const idade = 20;

  if (idade < 18) {
    window.console.log("Menor de idade.");
  } else if (idade >= 18 && idade < 60) {
    window.console.log("Adulto.");
  } else {
    window.console.log("Idoso.");
  }
}

// Chamada da função
exemploEstruturaLogicaMultiplas();

// Exemplos de operadores lógicos e relacionais
function exemploOperadoresLogicosRelacionais() {
  const x = 5;
  const y = "5";
  const z = 10;

  // Operadores relacionais
  window.console.log(`x > z: ${x > z}`); // false
  window.console.log(`x < z: ${x < z}`); // true
  window.console.log(`x >= 5: ${x >= 5}`); // true
  window.console.log(`x <= 4: ${x <= 4}`); // false
  window.console.log(`x == y: ${x == y}`); // true (valores iguais, tipos diferentes)
  window.console.log(`x === y: ${x === y}`); // false (valores iguais, tipos diferentes)
  window.console.log(`x != z: ${x != z}`); // true
  window.console.log(`x !== y: ${x !== y}`); // true (valores iguais, mas tipos diferentes)

  // Operadores lógicos
  window.console.log(`x > 2 && x < 8: ${x > 2 && x < 8}`); // true (ambas as condições são verdadeiras)
  window.console.log(`x < 2 || x > 8: ${x < 2 || x > 8}`); // false (nenhuma condição é verdadeira)
  window.console.log(`!(x > z): ${!(x > z)}`); // true (negação de false)

  // Exemplo prático com E (&&) e OU (||)
  if (x > 2 && x < 8) {
    window.console.log("x está entre 2 e 8.");
  }

  if (x < 2 || x > 8) {
    window.console.log("x é menor que 2 ou maior que 8.");
  } else {
    window.console.log("x está entre 2 e 8.");
  }

  const verdadeiro = true;
  const falso = false;

  window.console.log(`!verdadeiro: ${!verdadeiro}`); // false
  window.console.log(`!falso: ${!falso}`); // true

  window.console.log(`!(x > 5): ${!(x > 5)}`); // false (negação de true)
  window.console.log(`!(x < 5): ${!(x < 5)}`); // true (negação de false)

  // Exemplo prático
  if (!falso) {
    window.console.log("A condição foi negada e é verdadeira.");
  }
}

exemploOperadoresLogicosRelacionais();
