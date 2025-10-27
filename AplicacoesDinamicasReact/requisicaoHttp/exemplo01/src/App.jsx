// Aplicação principal de CRUD de Produtos
// API: https://proweb.leoproti.com.br/produtos
// Documentação: https://proweb.leoproti.com.br/swagger-ui/index.html
import { useState, useEffect } from 'react';
import ProdutoLista from './components/ProdutoLista';
import ProdutoForm from './components/ProdutoForm';
import {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  excluirProduto,
} from './services/produtoService';
import './App.css';

function App() {
  // Estado da aplicação
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mostraForm, setMostraForm] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

  // Carrega produtos ao iniciar a aplicação
  useEffect(() => {
    carregarProdutos();
  }, []);

  /**
   * GET /produtos - Busca todos os produtos da API
   */
  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const dados = await listarProdutos();
      setProdutos(dados);
      mostrarMensagem('success', 'Produtos carregados com sucesso!');
    } catch (error) {
      mostrarMensagem('error', 'Erro ao carregar produtos. Verifique a API.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * POST /produtos - Cria novo produto
   * PUT /produtos/{id} - Atualiza produto existente
   */
  const handleSubmitProduto = async (produto) => {
    setLoading(true);
    try {
      if (produtoEditando) {
        // Atualizar produto existente
        await atualizarProduto(produtoEditando.id, produto);
        mostrarMensagem('success', 'Produto atualizado com sucesso!');
      } else {
        // Criar novo produto
        await criarProduto(produto);
        mostrarMensagem('success', 'Produto criado com sucesso!');
      }
      
      // Recarrega a lista e fecha o formulário
      await carregarProdutos();
      setMostraForm(false);
      setProdutoEditando(null);
    } catch (error) {
      mostrarMensagem('error', 'Erro ao salvar produto.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * DELETE /produtos/{id} - Remove produto
   */
  const handleExcluirProduto = async (id) => {
    setLoading(true);
    try {
      await excluirProduto(id);
      mostrarMensagem('success', 'Produto excluído com sucesso!');
      await carregarProdutos();
    } catch (error) {
      mostrarMensagem('error', 'Erro ao excluir produto.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Abre o formulário em modo edição
   */
  const handleEditarProduto = (produto) => {
    setProdutoEditando(produto);
    setMostraForm(true);
  };

  /**
   * Abre o formulário em modo criação
   */
  const handleNovoProduto = () => {
    setProdutoEditando(null);
    setMostraForm(true);
  };

  /**
   * Fecha o formulário
   */
  const handleCancelar = () => {
    setMostraForm(false);
    setProdutoEditando(null);
  };

  /**
   * Exibe mensagem temporária (3 segundos)
   */
  const mostrarMensagem = (tipo, texto) => {
    setMensagem({ tipo, texto });
    setTimeout(() => setMensagem({ tipo: '', texto: '' }), 3000);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Gerenciamento de Produtos</h1>
        <p className="api-info">
          API: <code>https://proweb.leoproti.com.br/produtos</code>
        </p>
      </header>

      {/* Mensagens de feedback */}
      {mensagem.texto && (
        <div className={`mensagem mensagem-${mensagem.tipo}`}>
          {mensagem.texto}
        </div>
      )}

      <main className="app-main">
        {mostraForm ? (
          // Formulário de criar/editar produto
          <ProdutoForm
            produtoInicial={produtoEditando}
            onSubmit={handleSubmitProduto}
            onCancelar={handleCancelar}
            isEdicao={!!produtoEditando}
          />
        ) : (
          // Lista de produtos
          <>
            <div className="toolbar">
              <button onClick={handleNovoProduto} className="btn btn-new">
                ➕ Novo Produto
              </button>
              <button onClick={carregarProdutos} className="btn btn-refresh">
                🔄 Atualizar
              </button>
            </div>

            <ProdutoLista
              produtos={produtos}
              onEditar={handleEditarProduto}
              onExcluir={handleExcluirProduto}
              loading={loading}
            />
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Exemplo didático de CRUD com React + Vite + Axios |{' '}
          <a
            href="https://proweb.leoproti.com.br/swagger-ui/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Documentação da API
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
