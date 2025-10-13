// script.minimo.js
// Versão mínima e comentada linha-a-linha para aula

// URL base da API
const API_BASE = 'https://proweb.leoproti.com.br/produtos';

// Formata número como preço em reais: 123.4 -> 'R$ 123,40'
function formatPreco(v){
  return 'R$ ' + Number(v).toFixed(2).replace('.', ',');
}

// Função que busca os produtos e popula a tabela
async function carregar(){
  // Faz GET /produtos
  const resp = await fetch(API_BASE);
  // Lê resposta como JSON (array de produtos)
  const produtos = await resp.json();
  // Encontra o tbody da tabela onde vamos inserir as linhas
  const tbody = document.querySelector('#produtos-table tbody');
  // Monta as linhas ou uma mensagem caso não existam produtos
  tbody.innerHTML = produtos.length ? produtos.map(p => 
    `
    <tr data-id="${p.id}">
      <td>${p.id}</td>
      <td>${p.nome}</td>
      <td>${formatPreco(p.preco)}</td>
      <td>
        <a class="btn btn-sm btn-primary" href="form.html?id=${p.id}">Editar</a>
        <button class="btn btn-sm btn-danger btn-del">Excluir</button>
      </td>
    </tr>
    `
  ).join('') : '<tr><td colspan="4" class="text-center">Nenhum produto</td></tr>';
}

// Usamos event delegation: um único listener para cliques na página
// Isso evita precisar adicionar um listener por botão gerado dinamicamente
document.addEventListener('click', async (e) => {
  // Se o alvo do clique tiver a classe 'btn-del', tratamos como exclusão
  if(e.target.classList.contains('btn-del')){
    // Encontra a linha (<tr>) mais próxima para pegar o data-id
    const tr = e.target.closest('tr');
    const id = tr.dataset.id;
    // Pergunta confirmação ao usuário
    if(confirm('Confirmar exclusão?')){
      // Chama DELETE /produtos/{id}
      await fetch(API_BASE + '/' + id, { method: 'DELETE' });
      // Recarrega a lista
      carregar();
    }
  }
});

// Quando o DOM estiver pronto, carrega os produtos
document.addEventListener('DOMContentLoaded', carregar);
