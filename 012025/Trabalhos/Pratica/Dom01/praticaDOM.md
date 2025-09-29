# 📝 Prática DOM - Sistema de Gerenciamento de Estudantes

## 🎯 Objetivo
Desenvolver uma aplicação web para gerenciar informações de estudantes utilizando JavaScript e manipulação do DOM. Esta prática consolidará os conhecimentos sobre seleção de elementos, eventos, validação de formulários e criação dinâmica de conteúdo.

## 📋 Descrição do Projeto
Você deve criar um **Sistema de Gerenciamento de Estudantes** que permita:
- ✅ Cadastrar novos estudantes
- 👁️ Visualizar lista de estudantes
- ✏️ Editar informações existentes
- 🗑️ Remover estudantes
- 🔍 Pesquisar e filtrar estudantes
- 📊 Exibir estatísticas dos dados

## 🏗️ Estrutura Base do HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Gerenciamento de Estudantes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>🎓 Sistema de Estudantes</h1>
            <p>Gerencie informações acadêmicas com facilidade</p>
        </header>

        <!-- Formulário de Cadastro -->
        <section class="form-section">
            <h2>📝 Cadastro de Estudante</h2>
            <form id="studentForm" class="student-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="studentName">Nome Completo *</label>
                        <input type="text" id="studentName" required>
                    </div>
                    <div class="form-group">
                        <label for="studentEmail">E-mail *</label>
                        <input type="email" id="studentEmail" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="studentAge">Idade</label>
                        <input type="number" id="studentAge" min="16" max="80">
                    </div>
                    <div class="form-group">
                        <label for="studentCourse">Curso *</label>
                        <select id="studentCourse" required>
                            <option value="">Selecione um curso</option>
                            <option value="Ciência da Computação">Ciência da Computação</option>
                            <option value="Engenharia de Software">Engenharia de Software</option>
                            <option value="Sistemas de Informação">Sistemas de Informação</option>
                            <option value="Análise e Desenvolvimento">Análise e Desenvolvimento</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="studentPeriod">Período</label>
                        <select id="studentPeriod">
                            <option value="Matutino">Matutino</option>
                            <option value="Vespertino">Vespertino</option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="studentSemester">Semestre</label>
                        <input type="number" id="studentSemester" min="1" max="10" value="1">
                    </div>
                </div>
                
                <div class="form-buttons">
                    <button type="submit" class="btn btn-primary">Cadastrar Estudante</button>
                    <button type="button" id="clearForm" class="btn btn-secondary">Limpar</button>
                </div>
            </form>
        </section>

        <!-- Seção de Busca e Filtros -->
        <section class="search-section">
            <div class="search-controls">
                <input type="text" id="searchInput" placeholder="🔍 Pesquisar por nome ou email...">
                <select id="courseFilter">
                    <option value="">Todos os cursos</option>
                    <option value="Ciência da Computação">Ciência da Computação</option>
                    <option value="Engenharia de Software">Engenharia de Software</option>
                    <option value="Sistemas de Informação">Sistemas de Informação</option>
                    <option value="Análise e Desenvolvimento">Análise e Desenvolvimento</option>
                </select>
                <select id="periodFilter">
                    <option value="">Todos os períodos</option>
                    <option value="Matutino">Matutino</option>
                    <option value="Vespertino">Vespertino</option>
                    <option value="Noturno">Noturno</option>
                </select>
            </div>
        </section>

        <!-- Estatísticas -->
        <section class="stats-section">
            <div class="stats-grid">
                <div class="stat-card">
                    <h3 id="totalStudents">0</h3>
                    <p>Total de Estudantes</p>
                </div>
                <div class="stat-card">
                    <h3 id="avgAge">0</h3>
                    <p>Idade Média</p>
                </div>
                <div class="stat-card">
                    <h3 id="mostPopularCourse">-</h3>
                    <p>Curso Mais Popular</p>
                </div>
                <div class="stat-card">
                    <h3 id="currentSemesterAvg">0</h3>
                    <p>Semestre Médio</p>
                </div>
            </div>
        </section>

        <!-- Lista de Estudantes -->
        <section class="students-section">
            <div class="section-header">
                <h2>👥 Lista de Estudantes</h2>
                <div class="list-controls">
                    <button id="exportBtn" class="btn btn-outline">📄 Exportar</button>
                    <button id="sortBtn" class="btn btn-outline">🔄 Ordenar</button>
                </div>
            </div>
            
            <div id="studentsContainer" class="students-grid">
                <!-- Estudantes serão inseridos aqui dinamicamente -->
            </div>
            
            <div id="emptyState" class="empty-state">
                <h3>📚 Nenhum estudante cadastrado</h3>
                <p>Adicione o primeiro estudante usando o formulário acima.</p>
            </div>
        </section>
    </div>

    <script src="praticaDOM.js"></script>
</body>
</html>
```

## 🎯 Funcionalidades Obrigatórias

### 1. 📝 Cadastro de Estudantes
**Métodos DOM necessários:**
- `getElementById()`, `querySelector()`
- `addEventListener()`
- `value`, `createElement()`

**Requisitos:**
- Validar todos os campos obrigatórios
- Verificar formato do email
- Verificar duplicatas (mesmo email)
- Limpar formulário após cadastro
- Exibir mensagem de sucesso/erro

### 2. 👁️ Exibição Dinâmica
**Métodos DOM necessários:**
- `innerHTML`, `textContent`
- `appendChild()`, `createElement()`
- `setAttribute()`, `dataset`

**Requisitos:**
- Criar cards para cada estudante
- Exibir todas as informações
- Botões de ação (editar/excluir) em cada card
- Estado vazio quando não há estudantes

### 3. ✏️ Edição de Estudantes
**Métodos DOM necessários:**
- `parentNode`, `closest()`
- `setAttribute()`, `removeAttribute()`
- `classList.add()`, `classList.remove()`

**Requisitos:**
- Transformar card em formulário de edição
- Pré-preencher com dados atuais
- Validar alterações
- Salvar ou cancelar edição

### 4. 🗑️ Remoção de Estudantes
**Métodos DOM necessários:**
- `remove()`, `removeChild()`
- `confirm()`

**Requisitos:**
- Confirmação antes de excluir
- Atualizar lista e estatísticas
- Animação de remoção

### 5. 🔍 Busca e Filtros
**Métodos DOM necessários:**
- `querySelectorAll()`
- `style.display`
- `includes()`, `toLowerCase()`

**Requisitos:**
- Busca em tempo real por nome/email
- Filtro por curso
- Filtro por período
- Combinação de múltiplos filtros

### 6. 📊 Estatísticas em Tempo Real
**Métodos DOM necessários:**
- Cálculos matemáticos
- `textContent`
- Loops com `forEach`

**Requisitos:**
- Total de estudantes
- Idade média
- Curso mais popular
- Semestre médio

## 📚 Estrutura de Dados

```javascript
// Exemplo de objeto estudante
const student = {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    age: 22,
    course: "Ciência da Computação",
    period: "Noturno",
    semester: 4,
    createdAt: new Date()
};
```

## 🎨 Card do Estudante (Estrutura HTML)

```html
<div class="student-card" data-id="1" data-course="Ciência da Computação" data-period="Noturno">
    <div class="student-header">
        <h3 class="student-name">João Silva</h3>
        <span class="student-semester">4º Semestre</span>
    </div>
    <div class="student-info">
        <p><strong>Email:</strong> joao@email.com</p>
        <p><strong>Idade:</strong> 22 anos</p>
        <p><strong>Curso:</strong> Ciência da Computação</p>
        <p><strong>Período:</strong> Noturno</p>
    </div>
    <div class="student-actions">
        <button class="btn-edit" onclick="editStudent(1)">✏️ Editar</button>
        <button class="btn-delete" onclick="deleteStudent(1)">🗑️ Excluir</button>
    </div>
</div>
```

## 🔧 Funcionalidades JavaScript Obrigatórias

### Seleção de Elementos
```javascript
// Selecionar elementos do formulário
const form = document.getElementById('studentForm');
const nameInput = document.getElementById('studentName');
// ... outros elementos

// Selecionar elementos de exibição
const studentsContainer = document.getElementById('studentsContainer');
const emptyState = document.getElementById('emptyState');
```

### Validações
```javascript
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateForm(formData) {
    // Implementar validações
}
```

### Manipulação de Dados
```javascript
let students = []; // Array global
let nextId = 1; // Contador de IDs

function addStudent(studentData) {
    // Implementar adição
}

function updateStudent(id, newData) {
    // Implementar atualização
}

function deleteStudent(id) {
    // Implementar remoção
}
```

## 🎯 Critérios de Avaliação

| Funcionalidade | Pontos | Detalhes |
|---------------|--------|----------|
| **Cadastro** | 20 | Formulário completo com validações |
| **Exibição** | 15 | Cards dinâmicos bem estruturados |
| **Edição** | 20 | Edição inline ou modal |
| **Remoção** | 10 | Com confirmação |
| **Busca/Filtros** | 15 | Múltiplos filtros funcionais |
| **Estatísticas** | 10 | Cálculos corretos em tempo real |
| **Interface** | 5 | Layout responsivo e organizado |
| **Código** | 5 | Organização e comentários |

**Total: 100 pontos**

## 🌟 Funcionalidades Extras (Bônus)

### Nível Intermediário (+15 pontos)
- 💾 Persistência no localStorage
- 📊 Gráficos simples (usando Chart.js ou similar)
- 🔄 Ordenação por diferentes campos
- 📱 Design totalmente responsivo
- ⚡ Animações CSS com JavaScript

### Nível Avançado (+25 pontos)
- 📤 Exportação para CSV/PDF
- 🔐 Sistema de login simples
- 📸 Upload de foto do estudante
- 📅 Sistema de presenças
- 🎨 Tema claro/escuro
- 📧 Validação de email em tempo real

## 💡 Dicas de Implementação

### 1. Event Delegation
```javascript
// Use para elementos criados dinamicamente
studentsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-edit')) {
        const studentId = e.target.closest('.student-card').dataset.id;
        editStudent(parseInt(studentId));
    }
});
```

### 2. Busca e Filtros
```javascript
function filterStudents() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const courseFilter = document.getElementById('courseFilter').value;
    
    const studentCards = document.querySelectorAll('.student-card');
    
    studentCards.forEach(card => {
        const name = card.querySelector('.student-name').textContent.toLowerCase();
        const course = card.dataset.course;
        
        const matchesSearch = name.includes(searchTerm);
        const matchesCourse = !courseFilter || course === courseFilter;
        
        card.style.display = (matchesSearch && matchesCourse) ? 'block' : 'none';
    });
}
```

### 3. Validação de Formulário
```javascript
function validateStudentForm() {
    const name = document.getElementById('studentName').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    
    if (!name) {
        showError('Nome é obrigatório');
        return false;
    }
    
    if (!validateEmail(email)) {
        showError('Email inválido');
        return false;
    }
    
    return true;
}
```

## 📁 Estrutura de Arquivos

```
praticaDOM/
│
├── index.html          # Estrutura HTML
├── styles.css          # Estilos CSS
├── praticaDOM.js       # Lógica JavaScript
└── README.md           # Documentação
```

## 🚀 Como Começar

1. **Configuração Inicial**
   - Criar a estrutura HTML básica
   - Adicionar estilos CSS
   - Configurar seleções DOM

2. **Primeira Funcionalidade**
   - Implementar cadastro básico
   - Testar no navegador
   - Adicionar validações

3. **Expansão Gradual**
   - Implementar exibição
   - Adicionar edição
   - Implementar filtros

## ⏰ Cronograma Sugerido

- **Dia 1-2:** HTML + CSS + Estrutura básica JS
- **Dia 3-4:** Cadastro + Exibição + Validações
- **Dia 5-6:** Edição + Remoção + Filtros
- **Dia 7:** Estatísticas + Polimento + Testes

## 🔍 Checklist Final

### Funcionalidades Básicas
- [ ] Formulário de cadastro funcional
- [ ] Validações de entrada
- [ ] Exibição dinâmica de estudantes
- [ ] Edição inline ou modal
- [ ] Remoção com confirmação
- [ ] Busca em tempo real
- [ ] Filtros por curso/período
- [ ] Estatísticas atualizadas

### Qualidade do Código
- [ ] Código organizado em funções
- [ ] Comentários explicativos
- [ ] Tratamento de erros
- [ ] Sem erros no console
- [ ] Event delegation implementado
- [ ] Validações robustas

### Interface do Usuário
- [ ] Layout responsivo
- [ ] Estados visuais (loading, empty)
- [ ] Feedback visual (sucesso/erro)
- [ ] Navegação intuitiva

## 📞 Suporte

**Dúvidas?** Consulte:
1. Exemplos na pasta `/IntroducaoJSDOM/`
2. Documentação MDN (developer.mozilla.org)
3. Console do navegador para debug
4. Professor nos horários de atendimento

---

**🎯 Objetivo:** Dominar manipulação DOM através de projeto prático e completo!

**📝 Entrega:** Código funcional + demonstração + documentação

**🏆 Sucesso:** Interface profissional + código limpo + todas funcionalidades