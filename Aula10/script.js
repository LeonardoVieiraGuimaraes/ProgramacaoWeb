// Exemplo de uso do window.alert
window.alert("Este é um exemplo de alerta!");

// Exemplo de uso do window.confirm
const confirmacao = window.confirm("Você deseja continuar?");
window.console.log(`Confirmação: ${confirmacao}`);

// Exemplo de uso do window.prompt
const nome = window.prompt("Qual é o seu nome?");
window.console.log(`Nome informado: ${nome}`);

// Exemplo de uso do window.setTimeout
window.setTimeout(() => {
  window.console.log("Executado após 2 segundos");
}, 2000);

// Exemplo de uso do window.setInterval
const intervalo = window.setInterval(() => {
  window.console.log("Executando a cada 1 segundo");
}, 1000);

// Parar o intervalo após 5 segundos
window.setTimeout(() => {
  window.clearInterval(intervalo);
  window.console.log("Intervalo parado");
}, 5000);

// Exemplo de uso do window.open e window.close
const novaJanela = window.open("https://www.google.com", "_blank");
window.setTimeout(() => {
  novaJanela.close();
  window.console.log("Janela fechada");
}, 3000);

// Exemplo de uso do window.scrollTo
window.scrollTo(0, 500);
window.console.log("Rolagem para 500px de altura");

// Exemplo de uso do window.focus e window.blur
window.focus();
window.console.log("Janela focada");

// Exemplo de uso do window.print
// window.print(); // Descomente para abrir a caixa de diálogo de impressão

// Exemplo de uso do window.addEventListener
window.addEventListener("resize", () => {
  window.console.log("A janela foi redimensionada!");
});

// Exemplo de uso do window.requestAnimationFrame
function animar() {
  window.console.log("Animação em andamento...");
  window.requestAnimationFrame(animar);
}
const animacaoId = window.requestAnimationFrame(animar);

// Cancelar a animação após 3 segundos
window.setTimeout(() => {
  window.cancelAnimationFrame(animacaoId);
  window.console.log("Animação cancelada");
}, 3000);

// Exemplo de segunda hierarquia do window.location
window.console.log(`Protocolo: ${window.location.protocol}`);
window.console.log(`Host: ${window.location.host}`);
window.console.log(`Caminho: ${window.location.pathname}`);

// Exemplo de segunda hierarquia do window.navigator
window.console.log(`Idioma do navegador: ${window.navigator.language}`);
window.console.log(`Plataforma: ${window.navigator.platform}`);
window.console.log(`Online: ${window.navigator.onLine}`);

// Exemplo de segunda hierarquia do window.screen
window.console.log(`Largura disponível: ${window.screen.availWidth}`);
window.console.log(`Altura disponível: ${window.screen.availHeight}`);
window.console.log(`Profundidade de cor: ${window.screen.colorDepth}`);

// Exemplo de segunda hierarquia do window.history
window.console.log(`Comprimento do histórico: ${window.history.length}`);
// Navegar no histórico (descomente para testar):
// window.history.back(); // Voltar uma página
// window.history.forward(); // Avançar uma página

// Exemplo de segunda hierarquia do window.frames
window.console.log(`Número de frames: ${window.frames.length}`);
// Acessar um frame específico (se existir):
// window.frames[0].location.href = "https://www.example.com"; // Exemplo
