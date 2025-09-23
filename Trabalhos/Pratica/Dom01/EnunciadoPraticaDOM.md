# 📝 Prática JavaScript DOM - Lista de Tarefas Interativa

## 🎯 Objetivo
Desenvolver uma aplicação web interativa para gerenciar uma lista de tarefas utilizando JavaScript e manipulação do DOM. Esta prática visa consolidar os conhecimentos de seleção de elementos, manipulação de conteúdo, eventos e criação dinâmica de elementos.

## 📋 Descrição da Atividade
Você deve criar uma **Lista de Tarefas (To-Do List)** funcional que permita ao usuário adicionar, marcar como concluída, editar e remover tarefas. A aplicação deve ser totalmente desenvolvida com HTML, CSS e JavaScript puro (sem frameworks).

## 🏗️ Estrutura Básica Fornecida

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas - Prática DOM</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>📝 Minha Lista de Tarefas</h1>
            <p class="subtitle">Organize suas atividades com JavaScript!</p>
        </header>

        <div class="add-task-section">
            <input type="text" id="taskInput" placeholder="Digite uma nova tarefa...">
            <button id="addBtn">Adicionar</button>
        </div>

        <div class="filters">
            <button class="filter-btn active" data-filter="all">Todas</button>
            <button class="filter-btn" data-filter="pending">Pendentes</button>
            <button class="filter-btn" data-filter="completed">Concluídas</button>
        </div>

        <div class="stats">
            <span id="totalTasks">Total: 0</span>
            <span id="completedTasks">Concluídas: 0</span>
            <span id="pendingTasks">Pendentes: 0</span>
        </div>

        <ul id="taskList" class="task-list">
            <!-- Tarefas serão inseridas aqui via JavaScript -->
        </ul>

        <div class="empty-state" id="emptyState">
            <p>🎉 Nenhuma tarefa por aqui!</p>
            <p>Adicione uma nova tarefa para começar.</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

## 🎨 Funcionalidades Obrigatórias

### 1. 📝 Adicionar Tarefas
- **Requisitos:**
  - O usuário deve poder adicionar uma nova tarefa digitando no input e clicando no botão "Adicionar"
  - A tarefa também deve ser adicionada quando o usuário pressionar Enter no input
  - Validar se o input não está vazio antes de adicionar
  - Limpar o input após adicionar a tarefa

- **Métodos DOM a usar:**
  - `document.getElementById()`
  - `document.createElement()`
  - `appendChild()`
  - `addEventListener()`

### 2. ✅ Marcar/Desmarcar como Concluída
- **Requisitos:**
  - Cada tarefa deve ter um checkbox para marcar como concluída
  - Ao marcar, a tarefa deve ter estilo visual diferente (riscado, cor diferente)
  - Deve ser possível desmarcar uma tarefa concluída

- **Métodos DOM a usar:**
  - `classList.add()` e `classList.remove()`
  - `querySelector()` ou `querySelectorAll()`

### 3. 🗑️ Remover Tarefas
- **Requisitos:**
  - Cada tarefa deve ter um botão de excluir (❌)
  - Ao clicar, a tarefa deve ser removida da lista
  - Exibir confirmação antes de remover

- **Métodos DOM a usar:**
  - `removeChild()` ou `remove()`
  - `confirm()`

### 4. ✏️ Editar Tarefas
- **Requisitos:**
  - Cada tarefa deve ter um botão de editar (✏️)
  - Ao clicar, o texto da tarefa deve virar um input editável
  - Deve haver opções para salvar ou cancelar a edição

- **Métodos DOM a usar:**
  - `innerHTML` ou `textContent`
  - `getAttribute()` e `setAttribute()`

### 5. 🔍 Filtrar Tarefas
- **Requisitos:**
  - Botões para filtrar: "Todas", "Pendentes", "Concluídas"
  - Mostrar apenas as tarefas do tipo selecionado
  - Destacar o filtro ativo

- **Métodos DOM a usar:**
  - `querySelectorAll()`
  - `style.display`
  - `dataset`

### 6. 📊 Estatísticas
- **Requisitos:**
  - Mostrar contadores atualizados em tempo real:
    - Total de tarefas
    - Tarefas concluídas
    - Tarefas pendentes

- **Métodos DOM a usar:**
  - `getElementsByClassName()`
  - `textContent`

### 7. 🎨 Estado Vazio
- **Requisitos:**
  - Quando não houver tarefas, mostrar uma mensagem amigável
  - Esconder/mostrar baseado na quantidade de tarefas

- **Métodos DOM a usar:**
  - `style.display`
  - `children.length`

## 🔧 Estrutura da Tarefa no DOM

Cada tarefa deve ser criada com a seguinte estrutura:

```html
<li class="task-item" data-id="1">
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">Texto da tarefa</span>
    <div class="task-actions">
        <button class="edit-btn" title="Editar">✏️</button>
        <button class="delete-btn" title="Excluir">❌</button>
    </div>
</li>
```

## 📚 Conceitos DOM que Devem Ser Aplicados

### Seleção de Elementos
- [x] `getElementById()`
- [x] `getElementsByClassName()`
- [x] `getElementsByTagName()`
- [x] `querySelector()`
- [x] `querySelectorAll()`

### Manipulação de Conteúdo
- [x] `innerHTML`
- [x] `textContent`
- [x] `innerText`

### Criação e Remoção
- [x] `createElement()`
- [x] `appendChild()`
- [x] `removeChild()` ou `remove()`

### Atributos e Classes
- [x] `setAttribute()` e `getAttribute()`
- [x] `classList.add()`, `classList.remove()`, `classList.toggle()`
- [x] `dataset`

### Eventos
- [x] `addEventListener()`
- [x] `removeEventListener()`
- [x] Event delegation

### Navegação DOM
- [x] `parentNode`
- [x] `children`
- [x] `nextElementSibling`

## 🎯 Critérios de Avaliação

| Critério | Pontos | Descrição |
|----------|--------|-----------|
| **Funcionalidades Básicas** | 30 | Adicionar, remover, marcar tarefas |
| **Edição de Tarefas** | 20 | Funcionalidade de editar texto |
| **Filtros** | 15 | Sistema de filtros funcionando |
| **Estatísticas** | 10 | Contadores atualizados |
| **Validações** | 10 | Tratamento de erros e validações |
| **Interface** | 10 | Layout organizado e responsivo |
| **Código** | 5 | Organização e comentários |

**Total: 100 pontos**

## 🚀 Funcionalidades Extras (Opcional - Bônus)

### 🌟 Nível Intermediário (+10 pontos)
- Arrastar e reorganizar tarefas (drag & drop)
- Salvar tarefas no localStorage
- Adicionar data/hora de criação
- Categorias ou tags para tarefas

### 🌟 Nível Avançado (+20 pontos)
- Sistema de prioridades (alta, média, baixa)
- Busca/pesquisa por texto
- Exportar lista para arquivo
- Modo escuro/claro
- Animações CSS com JavaScript

## 📁 Estrutura de Entrega

```
lista-tarefas-dom/
│
├── index.html          # Estrutura HTML
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Documentação do projeto
```

## ⏰ Prazo de Entrega
**Data limite:** [A ser definido pelo professor]

## 💡 Dicas de Implementação

### 1. Estrutura de Dados
```javascript
// Exemplo de como organizar as tarefas
let tasks = [
    {
        id: 1,
        text: "Estudar JavaScript",
        completed: false,
        createdAt: new Date()
    }
];
```

### 2. Event Delegation
```javascript
// Use event delegation para eventos em elementos criados dinamicamente
document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        // Lógica para deletar
    }
});
```

### 3. Organização do Código
```javascript
// Organize seu código em funções
function addTask() { /* ... */ }
function removeTask(id) { /* ... */ }
function toggleTask(id) { /* ... */ }
function updateStats() { /* ... */ }
```

## 🔍 Checklist de Verificação

Antes de entregar, verifique:

- [ ] Todas as funcionalidades obrigatórias implementadas
- [ ] Código comentado e organizado
- [ ] Validações de entrada funcionando
- [ ] Layout responsivo
- [ ] Sem erros no console do navegador
- [ ] Testes manuais realizados
- [ ] README.md com instruções de uso

## 📞 Suporte

Em caso de dúvidas:
1. Consulte os exemplos da pasta `/IntroducaoJSDOM/`
2. Revise os conceitos DOM estudados em aula
3. Utilize o console do navegador (F12) para debug
4. Procure o professor durante os horários de atendimento

---

**Boa sorte! 🍀 Lembre-se: o DOM é uma das bases mais importantes do desenvolvimento web front-end.**