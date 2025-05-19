// Evento de clique
document.getElementById('btnClick').addEventListener('click', () => {
    alert('Botão clicado!');
});

// Evento de mouseover
document.getElementById('hoverDiv').addEventListener('mouseover', () => {
    document.getElementById('hoverDiv').style.backgroundColor = 'lightblue';
});

// Evento de mouseout
document.getElementById('hoverDiv').addEventListener('mouseout', () => {
    document.getElementById('hoverDiv').style.backgroundColor = 'white';
});

// Evento de keydown
document.getElementById('inputField').addEventListener('keydown', (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
});

// Evento de keyup
document.getElementById('inputField').addEventListener('keyup', () => {
    document.getElementById('output').textContent = document.getElementById('inputField').value;
});

// Evento de change
document.getElementById('selectBox').addEventListener('change', (event) => {
    alert(`Opção selecionada: ${event.target.value}`);
});

// Evento de submit
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulário enviado!');
});
