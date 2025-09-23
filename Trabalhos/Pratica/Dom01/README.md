# Produtos - API (Prática)

Projeto simples de cadastro e listagem de produtos consumindo uma API REST, utilizando HTML, CSS (Bootstrap) e JavaScript.

## Estrutura de Pastas

```
Aula11\Pratica\
│
├── css\
│   └── style.css
├── js\
│   └── produtos.js
├── index.html
└── README.md
```

- **index.html**: Página principal do sistema de produtos.
- **css/style.css**: Estilos customizados.
- **js/produtos.js**: Código JavaScript responsável por consumir a API e manipular a interface.

## Como usar

1. **Abra o arquivo `index.html` em seu navegador.**
2. Preencha o nome e preço do produto e clique em "Adicionar".
3. Os produtos cadastrados serão listados na tabela abaixo do formulário.

## Sobre a API

- O sistema consome uma API REST externa para listar e cadastrar produtos.
- Certifique-se de que a API está online e acessível.

### Acessando a documentação Swagger da API

Você pode visualizar e testar os endpoints da API acessando o Swagger UI em:

```
http://leoproti.com.br:8004/swagger-ui/index.html
```

#### O que você pode acessar no Swagger

- Listar todos os endpoints disponíveis da API (GET, POST, PUT, DELETE, etc).
- Visualizar detalhes de cada rota, parâmetros de entrada e saída.
- Testar requisições diretamente pelo navegador (enviar dados, consultar, atualizar e remover produtos).
- Ver exemplos de respostas e códigos de status HTTP.
- Conferir a documentação automática dos modelos de dados utilizados pela API.

## Tecnologias utilizadas

- HTML5
- CSS3 (Bootstrap)
- JavaScript (ES6+)
- API REST

---
Desenvolvido para fins didáticos na disciplina de Programação Web.
