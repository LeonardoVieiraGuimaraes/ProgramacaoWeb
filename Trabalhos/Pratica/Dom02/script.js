// Manipulação de texto
document.getElementById("btnMostrar").addEventListener("click", function () {
    const valor = document.getElementById("entrada").value;
    const resultado = document.getElementById("resultado");

    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Você digitou: " + valor;

    resultado.appendChild(novoParagrafo);
});

document.getElementById("btnLimpar").addEventListener("click", function () {
    document.getElementById("resultado").innerHTML = "";
});

// Contador
let contador = 0;

function atualizarContador() {
    document.getElementById("contador").textContent = contador;
}

document.getElementById("btnMais").addEventListener("click", function () {
    contador++;
    atualizarContador();
});

document.getElementById("btnMenos").addEventListener("click", function () {
    contador--;
    atualizarContador();
});

document.getElementById("btnZerar").addEventListener("click", function () {
    contador = 0;
    atualizarContador();
});