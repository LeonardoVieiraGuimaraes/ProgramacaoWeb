var btn = document.querySelector("button"); // Seleciona o botão no documento
var canvas = document.querySelector("canvas"); // Seleciona o elemento canvas
var ctx = canvas.getContext("2d"); // Obtém o contexto 2D para desenhar no canvas

var WIDTH = document.documentElement.clientWidth; // Largura da janela do navegador
var HEIGHT = document.documentElement.clientHeight; // Altura da janela do navegador

canvas.width = WIDTH; // Define a largura do canvas como a largura da janela
canvas.height = HEIGHT; // Define a altura do canvas como a altura da janela

// Função para gerar um número aleatório entre 0 e o valor fornecido
function random(number) {
  return Math.floor(Math.random() * number); // Retorna um número inteiro aleatório
}

// Função para desenhar círculos aleatórios no canvas
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT); // Limpa o canvas antes de desenhar
  for (var i = 0; i < 100; i++) {
    // Loop para desenhar 100 círculos
    ctx.beginPath(); // Inicia um novo caminho de desenho
    ctx.fillStyle = "rgba(255,0,0,0.5)"; // Define a cor de preenchimento com transparência
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    // Posição X aleatória // Posição Y aleatória // Raio aleatório // Ângulo inicial// Ângulo final
    ctx.fill(); // Preenche o círculo com a cor definida
  }
}

// Adiciona um evento de clique ao botão para chamar a função draw
btn.addEventListener("click", draw);
