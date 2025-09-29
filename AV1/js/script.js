// script.js - Portfólio AV1

document.addEventListener('DOMContentLoaded', function() {
    // EmailJS integration
    const form = document.getElementById('contato-form');
    const msgStatus = document.getElementById('msg-status');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            msgStatus.textContent = 'Enviando...';
            msgStatus.style.color = '#0077b6';

            // Substitua pelos seus próprios IDs do EmailJS
            const serviceID = 'default_service'; // ou seu service_id
            const templateID = 'template_xxxxxx'; // seu template_id

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    msgStatus.textContent = 'Mensagem enviada com sucesso!';
                    msgStatus.style.color = 'green';
                    form.reset();
                }, (err) => {
                    msgStatus.textContent = 'Erro ao enviar. Tente novamente.';
                    msgStatus.style.color = 'red';
                });
        });
    }

    // Scroll suave para navegação
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
