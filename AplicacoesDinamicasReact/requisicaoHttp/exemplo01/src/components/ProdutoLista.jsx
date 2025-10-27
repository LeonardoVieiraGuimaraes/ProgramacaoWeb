// Componente de lista de produtos com ações de editar/excluir.
import './ProdutoLista.css';

/**
 * Lista de Produtos
 * @param {Object} props
 * @param {Array} props.produtos - Lista de produtos
 * @param {Function} props.onEditar - Callback ao clicar em editar (produto) => void
 * @param {Function} props.onExcluir - Callback ao clicar em excluir (id) => void
 * @param {boolean} props.loading - Se está carregando
 */
function ProdutoLista({ produtos, onEditar, onExcluir, loading = false }) {
  if (loading) {
    return <div className="loading">Carregando produtos...</div>;
  }

  if (!produtos || produtos.length === 0) {
    return <div className="empty">Nenhum produto cadastrado.</div>;
  }

  // Formata preço em real brasileiro
  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco);
  };

  return (
    <div className="produto-lista">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td className="preco">{formatarPreco(produto.preco)}</td>
              <td className="acoes">
                <button
                  onClick={() => onEditar(produto)}
                  className="btn btn-edit"
                  title="Editar produto"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => {
                    if (window.confirm(`Deseja excluir "${produto.nome}"?`)) {
                      onExcluir(produto.id);
                    }
                  }}
                  className="btn btn-delete"
                  title="Excluir produto"
                >
                  🗑️ Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoLista;
