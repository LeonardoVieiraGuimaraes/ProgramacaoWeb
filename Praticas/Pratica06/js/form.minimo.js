// form.minimo.js
// Versão mínima e comentada para aula: cria ou atualiza produto com POST/PUT

// URL base da API
const API = 'https://proweb.leoproti.com.br/produtos';

// Quando o DOM estiver carregado executamos este bloco
document.addEventListener('DOMContentLoaded', async () => {
  // Pega id da query string, se existir (ex.: form.html?id=123)
  const id = new URLSearchParams(location.search).get('id');
  // Referências aos campos do formulário
  const nome = document.querySelector('#nome');
  const preco = document.querySelector('#preco');
  const form = document.querySelector('#produto-form');

  // Se estivermos no modo edição (tem id), busca os dados do produto
  if(id){
    // GET /produtos/{id}
    const r = await fetch(API + '/' + id);
    const p = await r.json();
    // Preenche os campos com os valores obtidos
    nome.value = p.nome;
    preco.value = p.preco;
    // Atualiza o título do formulário para indicar edição
    document.getElementById('form-title').textContent = 'Editar Produto';
  }

  // Ao submeter o formulário, criamos ou atualizamos o produto
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault(); // evita reload automático
    // Monta o corpo da requisição a partir dos campos
    const body = JSON.stringify({ nome: nome.value.trim(), preco: Number(preco.value) });
    if(id) {
      // PUT /produtos/{id}
      await fetch(API + '/' + id, { method: 'PUT', headers: {'Content-Type':'application/json'}, body });
    } else {
      // POST /produtos
      await fetch(API, { method: 'POST', headers: {'Content-Type':'application/json'}, body });
    }
    // Após salvar, volta para a lista
    location.href = 'index.html';
  });
});
