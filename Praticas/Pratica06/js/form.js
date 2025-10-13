// form.js - versão comentada linha-a-linha para uso em aula
// Objetivo: permitir criar (POST) e editar (PUT) produtos usando a API

// ----- Configuração -----
// URL base da API
const API = 'https://proweb.leoproti.com.br/produtos';
// Atalho para query selector
// Aqui declaramos uma função curta chamada "$" para facilitar selecionar elementos no DOM.
// Explicação do parâmetro 's':
// - 's' é uma string que representa um seletor CSS, por exemplo:
//     '#nome'      -> seleciona elemento com id="nome"
//     '.classe'    -> seleciona primeiro elemento com a classe 'classe'
//     'input[type="text"]' -> seleciona o primeiro input de texto
// - A função retorna o PRIMEIRO elemento que casar com o seletor (comportamento de document.querySelector).
// - Uso prático em aula: $('#nome') é muito mais curto que document.querySelector('#nome').
const $ = s => document.querySelector(s);

// ----- Referências aos campos do formulário -----
const idField = $('#produto-id');    // campo escondido com o id (se editar)
const nomeField = $('#nome');        // input nome
const precoField = $('#preco');      // input preço
const form = $('#produto-form');     // elemento <form>
const message = $('#message');       // área de mensagens (feedback)

// ----- Função para mostrar mensagens (temporárias) -----
function showMessage(text, type = 'success'){
  if(!message) return; // segura se o elemento não existir
  message.textContent = text; // coloca o texto
  // usa classes do Bootstrap para estilo
  message.className = type === 'success' ? 'alert alert-success' : 'alert alert-danger';
  message.style.display = 'block';
  // esconde após 3 segundos
  setTimeout(()=> message.style.display = 'none', 3000);
}

// ----- Função genérica para chamar a API -----
// Retorna {ok, status, data} onde data já é JSON (quando possível)
async function callApi(path = '', opts = {}){
  const res = await fetch(API + path, { mode: 'cors', headers: { 'Content-Type': 'application/json' }, ...opts });
  const txt = await res.text();
  try { return { ok: res.ok, status: res.status, data: txt ? JSON.parse(txt) : null }; }
  catch { return { ok: res.ok, status: res.status, data: txt }; }
}

// ----- Carregar produto para edição -----
// Quando o usuário acessa form.html?id=123, esta função puxa os dados
async function carregar(id){
  try{
    const r = await callApi('/' + id); // GET /produtos/{id}
    if(r.ok && r.data){
      // Preenche campos com os dados retornados
      idField.value = r.data.id;
      nomeField.value = r.data.nome;
      precoField.value = r.data.preco;
      // Altera o título do formulário para indicar edição
      const title = document.getElementById('form-title'); if(title) title.textContent = 'Editar Produto';
    } else showMessage('Produto não encontrado','error');
  }catch(e){
    // Em caso de erro de rede/CORS, mostra mensagem e loga no console
    showMessage('Erro ao carregar produto','error');
    console.error(e);
  }
}

// ----- Salvar (criar ou atualizar) -----
async function salvar(e){
  e.preventDefault(); // previne envio padrão do form
  // Monta o objeto produto a partir dos campos
  const produto = { nome: nomeField.value.trim(), preco: Number(precoField.value) };
  // Validação simples: nome não vazio e preço numérico
  if(!produto.nome || Number.isNaN(produto.preco)){ showMessage('Preencha nome e preço válidos','error'); return; }
  try{
    if(idField.value){
      // Modo edição: chama PUT /produtos/{id}
      const r = await callApi('/' + idField.value, { method: 'PUT', body: JSON.stringify(produto) });
      if(r.ok) {
        showMessage('Produto atualizado','success');
        // Redireciona de volta para a lista após 700ms
        setTimeout(()=> location.href = 'index.html', 700);
      } else showMessage('Erro ao atualizar','error');
    } else {
      // Modo criação: POST /produtos
      const r = await callApi('', { method: 'POST', body: JSON.stringify(produto) });
      if(r.ok) {
        showMessage('Produto criado','success');
        setTimeout(()=> location.href = 'index.html', 700);
      } else showMessage('Erro ao criar','error');
    }
  }catch(e){
    // Erro de conexão (CORS ou rede)
    showMessage('Erro de conexão','error');
    console.error(e);
  }
}

// ----- Inicialização -----
// Registra o evento de submit do formulário
form.addEventListener('submit', salvar);

// Se houver ?id= na URL, carrega o produto para edição
const params = new URLSearchParams(location.search);
if(params.has('id')) carregar(params.get('id'));
