let number = 1;
var x = 2;

var sum = (x, y) => x + y;

console.log(sum(number, x));

var myMain = document.getElementById("main");
myMain.style.color = "purple"; 
texto = myMain.innerHTML;
console.log(texto);
myMain.innerHTML = "Conteúdo alterado via JavaScript!";

var itens = document.getElementsByClassName("container");
console.log(itens);
itens[0].style.backgroundColor = "white";

// Exemplo usando getElementsByTagName()
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.fontSize = "50px";
  paragraphs[i].style.color = "green";
}

// Exemplo usando querySelector()
var firstContainer = document.querySelector(".container");
console.log(firstContainer);
firstContainer.style.border = "5px solid black";
firstContainer.style.padding = "10px";

// Exemplo usando querySelectorAll()
var allContainers = document.querySelectorAll(".container");
console.log(allContainers);
allContainers.forEach((container) => {
  container.style.backgroundColor = "lightgray";
  container.style.margin = "5px";
});

// Exemplo usando createElement()
var newParagraph = document.createElement("p");
newParagraph.textContent = "Este é um novo parágrafo criado dinamicamente.";
newParagraph.style.color = "purple";
document.body.appendChild(newParagraph);

// Exemplo usando setAttribute()
var link = document.createElement("a");
link.textContent = "Clique aqui para visitar o Google";
link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");
document.body.appendChild(link);


