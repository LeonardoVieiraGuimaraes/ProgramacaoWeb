// script.simple.js
// Versão comentada linha-a-linha para uso em aula
// Objetivo: listar produtos da API e permitir exclusão usando Fetch

// URL base da API (mudar se for necessário)
const API = 'https://proweb.leoproti.com.br/produtos';

// ----- Seletores rápidos (atalhos para o DOM) -----
// $('seletor') -> retorna o primeiro elemento que casa com o seletor
const $ = s => document.querySelector(s);
// $$('seletor') -> retorna NodeList com todos os elementos que casam
const $$ = s => document.querySelectorAll(s);

// ----- Elementos usados na página -----
// tbody da tabela onde os produtos serão inseridos
const tbody = $('#produtos-table tbody');
// div que mostra o estado de carregamento
const loading = $('#loading');
// div usada para mostrar mensagens ao usuário
const message = $('#message');

// ----- Funções utilitárias -----
// Alterna o indicador de 'loading' (mostrar/ocultar)
function setLoading(on) {
    // Se o elemento não existir, sai (evita erros em testes)
    if (!loading) return;
    // Exibe o elemento quando 'on' for true, caso contrário oculta
    loading.style.display = on ? 'block' : 'none';
}

// Mostra uma mensagem curta (tipo: 'success' ou 'error') e some após 3s
function showMessage(text, type = 'success') {
    // Se não há elemento de mensagem, sai
    if (!message) return;
    // Define o texto da mensagem
    message.textContent = text;
    // Define classes do Bootstrap para estilo (verde/vermelho)
    message.className = type === 'success' ? 'alert alert-success' : 'alert alert-danger';
    // Mostra a div
    message.style.display = 'block';
    // Após 3 segundos, oculta novamente
    setTimeout(() => { message.style.display = 'none'; }, 3000);
}

// Função pequena e genérica para chamar a API e retornar um objeto com {ok,status,data}
async function callApi(path = '', opts = {}) {
    // Faz a chamada fetch para API completa (API + path)
    const res = await fetch(API + path, { mode: 'cors', headers: { 'Content-Type': 'application/json' }, ...opts });
    // Lê o corpo como texto (pode estar vazio)
    const txt = await res.text();
    // Tenta fazer parse JSON; se falhar, retorna o texto cru
    try {
        return { ok: res.ok, status: res.status, data: txt ? JSON.parse(txt) : null };
    } catch (e) {
        return { ok: res.ok, status: res.status, data: txt };
    }
}

// ----- Carregar dados -----
// Busca os produtos e chama 'renderizar' para mostrar na tabela
async function carregarProdutos() {
    // Mostra indicador de carregamento
    setLoading(true);
    try {
        // Chama a API na raiz (GET /produtos)
        const r = await callApi('');
        // Se a resposta for OK e vier um array, renderiza os produtos
        if (r.ok && Array.isArray(r.data)) renderizar(r.data);
        else renderizar([]); // caso contrário, renderiza tabela vazia
    } catch (e) {
        // Se houver erro de rede (ex.: CORS ou API off), usamos dados de exemplo
        renderizar([
            { id: 1, nome: 'Notebook (exemplo)', preco: 2500 },
            { id: 2, nome: 'Mouse (exemplo)', preco: 89.9 }
        ]);
        // Mostra mensagem informando que estamos em modo offline
        showMessage('Modo offline: usando dados de exemplo', 'error');
    } finally {
        // Esconde o indicador de carregamento sempre
        setLoading(false);
    }
}

// ----- Renderizar tabela -----
// Recebe um array de produtos e popula o tbody
function renderizar(produtos) {
    // Limpa o conteúdo atual
    tbody.innerHTML = '';
    // Se não houver produtos, mostra uma linha informando isso
    if (!produtos || produtos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted py-4">Nenhum produto</td></tr>';
        return; // sai da função
    }

    // Para cada produto, cria uma linha na tabela
    produtos.forEach(p => {
        const tr = document.createElement('tr'); // cria <tr>
        // Preenche a linha usando template string. Note que formatamos o preço.
        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nome}</td>
            <td>R$ ${Number(p.preco).toFixed(2).replace('.', ',')}</td>
            <td>
                <a class="btn btn-sm btn-primary" href="form.html?id=${p.id}">Editar</a>
                <button class="btn btn-sm btn-danger btn-delete" data-id="${p.id}" data-nome="${p.nome}">Excluir</button>
            </td>`;
        // Anexa a linha ao tbody
        tbody.appendChild(tr);
    });

    // Depois de inserir as linhas, pegamos todos os botões de excluir e associamos o evento
    $$('.btn-delete').forEach(btn => btn.addEventListener('click', () => {
        // Lê id e nome do dataset do botão
        const id = btn.dataset.id;
        const nome = btn.dataset.nome;
        // Pergunta confirmação ao usuário antes de excluir
        if (confirm(`Excluir "${nome}"?`)) excluirProduto(id);
    }));
}

// ----- Excluir produto -----
// Envia DELETE /produtos/{id} e recarrega a lista se sucesso
async function excluirProduto(id) {
    setLoading(true); // mostra o spinner
    try {
        // Chama a API com método DELETE
        const r = await callApi('/' + id, { method: 'DELETE' });
        // Se OK, mostra mensagem e recarrega a lista
        if (r.ok) {
            showMessage('Produto excluído', 'success');
            carregarProdutos();
        } else {
            // Caso a API retorne erro, mostra mensagem de erro
            showMessage('Erro ao excluir', 'error');
        }
    } catch (e) {
        // Erro de conexão (ex.: CORS ou sem internet)
        showMessage('Erro de conexão', 'error');
    } finally {
        // Sempre oculta o loading
        setLoading(false);
    }
}

// ----- Inicialização -----
// Quando o DOM estiver pronto, executa carregarProdutos()
window.addEventListener('DOMContentLoaded', carregarProdutos);
