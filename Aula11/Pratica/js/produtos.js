// Define a URL base da API de produtos.
// Usada para buscar (GET) e inserir (POST) produtos via requisições HTTP.
const API_URL = "http://leoproti.com.br:8004/produtos";

// Função assíncrona responsável por buscar os produtos da API e exibi-los na tabela HTML.
async function carregarProdutos() {
  // Realiza uma requisição HTTP GET para a URL da API.
  const resp = await fetch(API_URL);
  // Converte a resposta da API para um objeto JavaScript (array de produtos).
  const produtos = await resp.json();
  // Seleciona o elemento <tbody> da tabela onde os produtos serão exibidos.
  const tbody = document.getElementById("produtosBody");
  // Limpa o conteúdo anterior da tabela para evitar duplicidade.
  tbody.innerHTML = "";
  // Percorre cada produto retornado pela API.
  produtos.forEach((produto) => {
    // Cria um novo elemento de linha da tabela (<tr>).
    const tr = document.createElement("tr");
    // Monta o conteúdo HTML da linha usando template strings.
    // Exibe o ID, o nome e o preço do produto.
    // Para o preço, verifica se não é nulo:
    // - Se não for nulo, usa toFixed(2) para exibir com duas casas decimais (ex: 10.00).
    // - Se for nulo, exibe uma string vazia (célula em branco).
    tr.innerHTML = `
      <td>${produto.id}</td>
      <td>${produto.nome}</td>
      <td>${produto.preco != null ? produto.preco.toFixed(2) : ""}</td>
    `;
    // Adiciona a linha criada ao corpo da tabela.
    tbody.appendChild(tr);
  });
}

// Adiciona um ouvinte de evento para o envio do formulário de cadastro de produto.
// Quando o formulário é enviado, executa a função assíncrona abaixo.
document
  .getElementById("produtoForm")
  .addEventListener("submit", async function (e) {
    // Previne o comportamento padrão do formulário (recarregar a página).
    e.preventDefault();
    // Obtém o valor do campo nome, removendo espaços extras.
    const nome = document.getElementById("nome").value.trim();
    // Obtém o valor do campo preço como string.
    const precoStr = document.getElementById("preco").value;
    // Converte o valor do preço para float, ou null se o campo estiver vazio.
    const preco = precoStr === "" ? null : parseFloat(precoStr);

    // Validação dos campos: nome não pode ser vazio e preço deve ser um número válido.
    if (!nome || preco === null || isNaN(preco)) {
      alert("Preencha o nome e um preço válido.");
      return;
    }

    try {
      // Envia uma requisição HTTP POST para a API com os dados do novo produto.
      // Os dados são enviados no corpo da requisição em formato JSON.
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, preco }),
      });

      // Se a resposta não for bem-sucedida (status HTTP diferente de 2xx), lança um erro.
      if (!resp.ok) {
        throw new Error("Erro HTTP: " + resp.status);
      }

      // Se o produto foi inserido com sucesso:
      // - Exibe mensagem de sucesso ao usuário.
      // - Limpa os campos do formulário.
      // - Atualiza a tabela de produtos chamando carregarProdutos().
      alert("Produto inserido com sucesso!");
      this.reset();
      carregarProdutos();
    } catch (err) {
      // Em caso de erro na requisição, exibe mensagem detalhada ao usuário.
      alert(
        "Erro ao salvar produto na API: " +
          err.message +
          "\nVerifique se a API está online, se CORS está liberado e se os dados enviados estão corretos."
      );
    }
  });

// Ao carregar o script, chama a função para exibir os produtos já cadastrados.
// Isso garante que a tabela esteja sempre atualizada ao abrir a página.
carregarProdutos();
