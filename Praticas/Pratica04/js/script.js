// Manipulação de texto
function mostrarTexto() {
  const valor = document.getElementById("entrada").value;
  const resultado = document.getElementById("resultado");

  const novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = "Você digitou: " + valor;

  resultado.appendChild(novoParagrafo);
}

function limparTexto() {
  document.getElementById("resultado").innerHTML = "";
}

// Contador
let contador = 0;

function atualizarContador() {
  document.getElementById("contador").textContent = contador;
}

function incrementar() {
  contador++;
  atualizarContador();
}

function decrementar() {
  contador--;
  atualizarContador();
}

function zerar() {
  contador = 0;
  atualizarContador();
}
