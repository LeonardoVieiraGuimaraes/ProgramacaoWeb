document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;

    if (nome && email) {
        alert(`Obrigado, ${nome}! Seu e-mail (${email}) foi enviado.`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

