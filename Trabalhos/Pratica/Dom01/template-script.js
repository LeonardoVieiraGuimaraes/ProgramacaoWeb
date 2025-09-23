/* ============================================
   📝 LISTA DE TAREFAS - JAVASCRIPT
   Prática JavaScript DOM - Template Inicial
   ============================================ */

// ========== VARIÁVEIS GLOBAIS ==========
let tasks = []; // Array para armazenar todas as tarefas
let taskIdCounter = 1; // Contador para IDs únicos
let currentFilter = 'all'; // Filtro atual ativo

// ========== ELEMENTOS DOM ==========
// TODO: Selecionar os elementos necessários usando getElementById, querySelector, etc.
const taskInput = null; // document.getElementById('taskInput');
const addBtn = null; // document.getElementById('addBtn');
const taskList = null; // document.getElementById('taskList');
const emptyState = null; // document.getElementById('emptyState');
const filterBtns = null; // document.querySelectorAll('.filter-btn');

// Elementos de estatísticas
const totalTasksSpan = null; // document.getElementById('totalTasks');
const completedTasksSpan = null; // document.getElementById('completedTasks');
const pendingTasksSpan = null; // document.getElementById('pendingTasks');

// ========== FUNÇÕES PRINCIPAIS ==========

/**
 * Função para inicializar a aplicação
 */
function initApp() {
    console.log('🚀 Aplicação Lista de Tarefas iniciada!');
    
    // TODO: Adicionar event listeners
    // addBtn.addEventListener('click', addTask);
    // taskInput.addEventListener('keypress', handleEnterKey);
    
    // TODO: Adicionar event listeners para filtros
    // filterBtns.forEach(btn => {
    //     btn.addEventListener('click', handleFilterClick);
    // });
    
    // TODO: Adicionar event delegation para a lista de tarefas
    // taskList.addEventListener('click', handleTaskActions);
    
    updateDisplay();
}

/**
 * Função para adicionar uma nova tarefa
 */
function addTask() {
    // TODO: Implementar lógica para adicionar tarefa
    console.log('🔄 Função addTask chamada');
    
    // 1. Pegar o valor do input
    // 2. Validar se não está vazio
    // 3. Criar objeto da tarefa
    // 4. Adicionar ao array tasks
    // 5. Limpar input
    // 6. Atualizar display
}

/**
 * Função para criar elemento HTML da tarefa
 * @param {Object} task - Objeto da tarefa
 * @returns {HTMLElement} - Elemento li da tarefa
 */
function createTaskElement(task) {
    console.log('🏗️ Criando elemento para tarefa:', task.text);
    
    // TODO: Implementar criação do elemento
    // 1. Criar elemento li
    // 2. Definir classes e atributos
    // 3. Criar HTML interno (checkbox, texto, botões)
    // 4. Retornar elemento
    
    return null; // Temporário
}

/**
 * Função para alternar status de conclusão da tarefa
 * @param {number} taskId - ID da tarefa
 */
function toggleTask(taskId) {
    console.log('✅ Alternando status da tarefa:', taskId);
    
    // TODO: Implementar toggle
    // 1. Encontrar tarefa no array
    // 2. Alterar propriedade completed
    // 3. Atualizar display
}

/**
 * Função para remover tarefa
 * @param {number} taskId - ID da tarefa
 */
function removeTask(taskId) {
    console.log('🗑️ Removendo tarefa:', taskId);
    
    // TODO: Implementar remoção
    // 1. Confirmar com usuário
    // 2. Remover do array tasks
    // 3. Atualizar display
}

/**
 * Função para editar tarefa
 * @param {number} taskId - ID da tarefa
 */
function editTask(taskId) {
    console.log('✏️ Editando tarefa:', taskId);
    
    // TODO: Implementar edição
    // 1. Encontrar elemento da tarefa
    // 2. Substituir texto por input
    // 3. Adicionar botões salvar/cancelar
    // 4. Implementar lógica de salvamento
}

/**
 * Função para filtrar tarefas
 * @param {string} filter - Tipo de filtro (all, pending, completed)
 */
function filterTasks(filter) {
    console.log('🔍 Aplicando filtro:', filter);
    
    currentFilter = filter;
    
    // TODO: Implementar filtros
    // 1. Mostrar/esconder tarefas baseado no filtro
    // 2. Atualizar botões de filtro
    // 3. Atualizar display
}

/**
 * Função para atualizar estatísticas
 */
function updateStats() {
    console.log('📊 Atualizando estatísticas');
    
    // TODO: Implementar atualização de stats
    // 1. Calcular total de tarefas
    // 2. Calcular tarefas concluídas
    // 3. Calcular tarefas pendentes
    // 4. Atualizar elementos DOM
}

/**
 * Função para atualizar display geral
 */
function updateDisplay() {
    console.log('🔄 Atualizando display');
    
    // TODO: Implementar atualização completa
    // 1. Limpar lista atual
    // 2. Renderizar todas as tarefas
    // 3. Aplicar filtro atual
    // 4. Atualizar estatísticas
    // 5. Mostrar/esconder estado vazio
}

/**
 * Função para mostrar/esconder estado vazio
 */
function toggleEmptyState() {
    // TODO: Implementar toggle do estado vazio
    // 1. Verificar se há tarefas visíveis
    // 2. Mostrar/esconder mensagem apropriada
}

// ========== EVENT HANDLERS ==========

/**
 * Handler para tecla Enter no input
 * @param {Event} e - Evento de teclado
 */
function handleEnterKey(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}

/**
 * Handler para cliques nos botões de filtro
 * @param {Event} e - Evento de clique
 */
function handleFilterClick(e) {
    const filter = e.target.getAttribute('data-filter');
    filterTasks(filter);
}

/**
 * Handler para ações nas tarefas (event delegation)
 * @param {Event} e - Evento de clique
 */
function handleTaskActions(e) {
    const target = e.target;
    const taskItem = target.closest('.task-item');
    
    if (!taskItem) return;
    
    const taskId = parseInt(taskItem.getAttribute('data-id'));
    
    // TODO: Implementar diferentes ações baseado no elemento clicado
    if (target.classList.contains('task-checkbox')) {
        // toggleTask(taskId);
    } else if (target.classList.contains('edit-btn')) {
        // editTask(taskId);
    } else if (target.classList.contains('delete-btn')) {
        // removeTask(taskId);
    }
}

// ========== FUNÇÕES AUXILIARES ==========

/**
 * Função para validar input de tarefa
 * @param {string} text - Texto a ser validado
 * @returns {boolean} - True se válido
 */
function validateTaskInput(text) {
    // TODO: Implementar validação
    // 1. Verificar se não está vazio
    // 2. Verificar comprimento mínimo/máximo
    // 3. Verificar caracteres especiais se necessário
    return text && text.trim().length > 0;
}

/**
 * Função para encontrar tarefa por ID
 * @param {number} id - ID da tarefa
 * @returns {Object|null} - Objeto da tarefa ou null
 */
function findTaskById(id) {
    return tasks.find(task => task.id === id) || null;
}

/**
 * Função para criar objeto de tarefa
 * @param {string} text - Texto da tarefa
 * @returns {Object} - Objeto da tarefa
 */
function createTaskObject(text) {
    return {
        id: taskIdCounter++,
        text: text.trim(),
        completed: false,
        createdAt: new Date()
    };
}

// ========== INICIALIZAÇÃO ==========

// Inicializar aplicação quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', initApp);

// ========== DADOS DE TESTE (OPCIONAL) ==========

/**
 * Função para adicionar tarefas de exemplo (para testes)
 */
function addSampleTasks() {
    const sampleTasks = [
        'Estudar JavaScript DOM',
        'Implementar função de adicionar tarefa',
        'Criar sistema de filtros',
        'Adicionar validações',
        'Testar funcionalidades'
    ];
    
    sampleTasks.forEach(taskText => {
        const task = createTaskObject(taskText);
        tasks.push(task);
    });
    
    // Marcar algumas como concluídas para teste
    if (tasks.length > 0) {
        tasks[0].completed = true;
        tasks[2].completed = true;
    }
    
    updateDisplay();
    console.log('📝 Tarefas de exemplo adicionadas!');
}

// Descomente a linha abaixo para adicionar tarefas de exemplo
// setTimeout(addSampleTasks, 1000);

/* ============================================
   📚 DICAS PARA IMPLEMENTAÇÃO:

   1. SELEÇÃO DE ELEMENTOS:
      - Use getElementById() para elementos únicos
      - Use querySelectorAll() para múltiplos elementos
      - Use querySelector() para o primeiro elemento

   2. MANIPULAÇÃO DE CONTEÚDO:
      - innerHTML para HTML complexo
      - textContent para texto simples
      - value para inputs

   3. CRIAÇÃO DE ELEMENTOS:
      - createElement() para criar elementos
      - appendChild() para adicionar ao DOM
      - setAttribute() para atributos

   4. EVENTOS:
      - addEventListener() para adicionar eventos
      - Event delegation para elementos dinâmicos
      - preventDefault() quando necessário

   5. CLASSES CSS:
      - classList.add() para adicionar classes
      - classList.remove() para remover
      - classList.toggle() para alternar

   6. VALIDAÇÕES:
      - Sempre validar inputs do usuário
      - Verificar se elementos existem antes de usar
      - Tratar erros adequadamente

   ============================================ */