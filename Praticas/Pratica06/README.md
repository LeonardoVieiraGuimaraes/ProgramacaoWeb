# Prática 06 - Sistema CRUD de Produtos

## 🎯 Objetivo
Desenvolver uma aplicação web completa que implementa operações CRUD (Create, Read, Update, Delete) para gerenciamento de produtos, utilizando uma API REST externa. A aplicação deve demonstrar o consumo de APIs, manipulação do DOM e tratamento de requisições assíncronas.

## 📋 Requisitos Implementados

### Funcionalidades CRUD
- ✅ **CREATE**: Cadastrar novos produtos
- ✅ **READ**: Listar todos os produtos
- ✅ **UPDATE**: Editar produtos existentes
- ✅ **DELETE**: Excluir produtos

### Estrutura de Dados
Cada produto possui os seguintes campos:
```json
{
  "id": 0,
  "nome": "string",
  "preco": 0
}
```

### Interface do Usuário
- Formulário para cadastro/edição de produtos
- Tabela para exibição dos produtos
- Botões de ação (Editar/Excluir)
- Mensagens de feedback para o usuário
- Indicador de carregamento (loading)

## 🔗 API Utilizada
**Base URL**: `https://proweb.leoproti.com.br/produtos`

### Endpoints Disponíveis

#### GET /produtos
- **Descrição**: Retorna todos os produtos
- **Método**: GET
- **Response**: Array de produtos

#### POST /produtos
- **Descrição**: Cria um novo produto
- **Método**: POST
- **Body**:
```json
{
  "nome": "string",
  "preco": 0
}
```

#### GET /produtos/{id}
- **Descrição**: Retorna um produto específico
- **Método**: GET
- **Parâmetro**: id do produto

#### PUT /produtos/{id}
- **Descrição**: Atualiza um produto existente
- **Método**: PUT
- **Parâmetro**: id do produto
- **Body**:
```json
{
  "id": 0,
  "nome": "string",
  "preco": 0
}
```

#### DELETE /produtos/{id}
- **Descrição**: Exclui um produto
- **Método**: DELETE
- **Parâmetro**: id do produto

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização moderna com gradientes e efeitos
- **JavaScript (ES6+)**: Lógica da aplicação e consumo da API
- **Fetch API**: Para requisições HTTP
- **Async/Await**: Para programação assíncrona

### Front-end com Bootstrap
- A interface foi simplificada e refatorada para usar o Bootstrap 5 (CDN). Isso reduz a necessidade de CSS customizado e garante responsividade imediata.

### Separação de páginas
- O formulário de criação/edição foi movido para `form.html`. A `index.html` agora contém apenas a lista de produtos e ações (novo, editar, excluir). O fluxo de edição abre `form.html?id=<id>` para carregar o produto.

### Atalho `$` (seleção rápida de elementos)

Para economizar digitação e deixar os exemplos mais limpos em aula, usamos um pequeno atalho para `document.querySelector`:

```javascript
// forma curta (arrow function usada no arquivo)
const $ = s => document.querySelector(s);

// uso
const nomeInput = $('#nome'); // equivalente a document.querySelector('#nome')

// forma equivalente mais explícita
function $(s) {
  return document.querySelector(s);
}
```

Explicação rápida:
- `s` é uma string com um seletor CSS (ex.: `'#id'`, `'.classe'`, `'input[type="text"]'`).
- `$` retorna o PRIMEIRO elemento que casar com o seletor (mesmo comportamento de `querySelector`).
- Se precisar de vários elementos, usamos `$$` como atalho para `document.querySelectorAll`, que retorna um NodeList. Exemplo:

```javascript
const $$ = s => document.querySelectorAll(s);
const itens = $$('.card'); // NodeList de elementos com classe .card
```

Observações:
- `NodeList` é parecido com um array mas não é um Array real; você pode iterar com `forEach` ou converter para Array (`Array.from(nodeList)`) se precisar de métodos de array.

## 📁 Estrutura do Projeto
```
Pratica06/
├── index.html          # Página principal (lista de produtos)
├── form.html           # Página de criação/edição de produtos
├── js/
│   ├── script.js       # Lógica: listagem e exclusão
│   └── form.js         # Lógica: criação/edição
└── README.md           # Documentação
```

## 🚀 Como Usar

### 1. Cadastrar Produto
1. Preencha os campos "Nome do Produto" e "Preço"
2. Clique em "Adicionar Produto"
3. O produto será salvo e aparecerá na lista

### 2. Editar Produto
1. Clique no botão "Editar" na linha do produto desejado
2. Os dados serão carregados no formulário
3. Modifique os campos necessários
4. Clique em "Atualizar Produto"

### 3. Excluir Produto
1. Clique no botão "Excluir" na linha do produto desejado
2. Confirme a exclusão na janela de confirmação
3. O produto será removido da lista

## 🔧 Funcionalidades Técnicas

### Tratamento de Erros
- Validação de formulário
- Tratamento de erros de rede
- Mensagens de feedback claras
- Fallbacks para falhas de conexão

### Interface Responsiva
- Layout adaptável para diferentes dispositivos
- Tabela responsiva com scroll horizontal
- Botões otimizados para touch

### UX/UI
- Loading indicators durante requisições
- Mensagens de sucesso/erro temporárias
- Confirmação antes de excluir
- Scroll automático para formulário em edição

## 📝 Observações Importantes

### CORS
A API utilizada deve ter CORS configurado para permitir requisições do browser.

### Validações
- Campos obrigatórios no formulário
- Validação de tipo numérico para preço
- Preço mínimo de R$ 0,00

### Tratamento de Estados
- Estado de loading durante requisições
- Estado de edição vs. criação
- Cancelamento de edição

## Exemplos de requisições (curl)

Use estes exemplos para testar a API a partir do terminal. Substitua os IDs e dados conforme necessário.

- Listar produtos (GET):

```bash
curl -i https://proweb.leoproti.com.br/produtos
```

- Criar produto (POST):

```bash
curl -i -X POST https://proweb.leoproti.com.br/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Produto Exemplo","preco":99.90}'
```

- Atualizar produto (PUT):

```bash
curl -i -X PUT https://proweb.leoproti.com.br/produtos/123 \
  -H "Content-Type: application/json" \
  -d '{"id":123,"nome":"Produto Atualizado","preco":79.90}'
```

- Remover produto (DELETE):

```bash
curl -i -X DELETE https://proweb.leoproti.com.br/produtos/123
```

## Testando localmente (evitar erro CORS)

Durante o desenvolvimento, abra a pasta `Pratica06` a partir de um servidor HTTP (não use file://). Exemplos:

Powershell (recomendado):

```powershell
npx http-server . -p 3000 --cors
# ou, se preferir Python:
# python -m http.server 3000
```

Depois, abra no navegador:

http://127.0.0.1:3000/Praticas/Pratica06/

Se a API remota não permitir CORS, use as opções abaixo para demonstração em sala de aula:

- Solicitar ao responsável da API que habilite CORS para seu domínio ou para "*" (apenas para teste).
- Usar um proxy reverso local que adicione os cabeçalhos CORS.
- Trabalhar com dados mock (ex.: arquivos JSON locais) até a API estar disponível.

---

**Desenvolvido para a disciplina de Programação Web - Newton Paiva**

*Esta aplicação demonstra conceitos fundamentais de desenvolvimento web moderno, incluindo consumo de APIs REST, manipulação do DOM e programação assíncrona.*

## Exemplos em PowerShell (Windows)

Se os alunos estiverem em Windows/Powershell, podem usar `Invoke-RestMethod` para obter e processar a lista de produtos. Exemplo para listar nomes:

```powershell
$produtos = Invoke-RestMethod -Uri 'https://proweb.leoproti.com.br/produtos' -Method Get
$nomes = $produtos | ForEach-Object { $_.nome }
$nomes
```

Este comando retorna uma lista com os nomes dos produtos.

## 🧠 Exercício rápido

Enunciado: usando os atalhos `$` e `$$` presentes nos scripts, escreva um pequeno trecho de código que:

- selecione todos os nomes de produtos visíveis na tabela (`<td>` com o nome)
- gere um array com esses nomes e mostre no console

Solução sugerida (para discutir em sala):

```javascript
// Seleciona todas as células que representam o nome do produto
const nomeCells = document.querySelectorAll('#produtos-table tbody tr td:nth-child(2)');
// Converte NodeList para array e extrai o texto
const nomes = Array.from(nomeCells).map(td => td.textContent.trim());
console.log(nomes);

// Usando o atalho $$ definido nos scripts (se disponível)
// const nomeCells = $$('#produtos-table tbody tr td:nth-child(2)');
// const nomes = Array.from(nomeCells).map(td => td.textContent.trim());
// console.log(nomes);
```

Objetivo do exercício: praticar seleção de elementos com seletores CSS e conversão de NodeList para Array para uso de métodos como `map`.

// forma curta (arrow function usada no arquivo)
const $ = s => document.querySelector(s);

// uso
const nomeInput = $('#nome'); // equivalente a document.querySelector('#nome')

// forma equivalente mais explícita
function $(s) {
  return document.querySelector(s);
}