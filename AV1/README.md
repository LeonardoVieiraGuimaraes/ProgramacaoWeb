# Portfólio Pessoal com Formulário de Contato (AV1)

## Descrição do Projeto
Este projeto consiste em um portfólio pessoal desenvolvido como atividade avaliativa (AV1) para a disciplina de Programação Web. O portfólio apresenta informações sobre o estudante, suas habilidades, projetos desenvolvidos e um formulário de contato funcional integrado ao serviço EmailJS.

O objetivo é demonstrar domínio em HTML5, CSS3, JavaScript, responsividade, boas práticas de estruturação de código e integração com serviços externos.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6)
- [EmailJS](https://www.emailjs.com/) (para envio de e-mails pelo formulário de contato)

## Estrutura do Projeto
```
AV1/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
```


## Instruções para Configurar o EmailJS
1. Crie uma conta gratuita em [EmailJS](https://www.emailjs.com/).
2. No painel do EmailJS:
   - Adicione um novo serviço de e-mail (ex: Gmail, Outlook, etc.).
   - Crie um novo template de e-mail, definindo os campos que serão enviados pelo formulário (nome, e-mail, mensagem).
3. No arquivo `index.html`, substitua os valores de `YOUR_USER_ID` e, no arquivo `js/script.js`, substitua `serviceID` e `templateID` pelos IDs fornecidos pelo EmailJS.
   - Exemplo:
     ```js
     const serviceID = 'default_service'; // ou seu service_id
     const templateID = 'template_xxxxxx'; // seu template_id
     ```
4. Publique o site e teste o envio do formulário. Você receberá os e-mails no endereço configurado no EmailJS.

### Documentação e Vídeos Úteis
- Documentação oficial EmailJS: [Criando um formulário de contato](https://www.emailjs.com/docs/tutorial/creating-contact-form/)
- Vídeo tutorial EmailJS (YouTube): [Como criar um formulário de contato com EmailJS](https://www.youtube.com/watch?v=QMTvjsd-oEg)
- Vídeo extra: [Como enviar e-mail com EmailJS](https://www.youtube.com/watch?v=uFEJyU6i20Q)

## Link para o Site Publicado
> Substitua este campo pelo link do seu portfólio publicado (ex: GitHub Pages, Vercel, Netlify, etc).

Exemplo:
```
https://seuusuario.github.io/ProgramacaoWeb/AV1/
```

---

**Desenvolvido por [Seu Nome] para a disciplina de Programação Web - Newton Paiva**
