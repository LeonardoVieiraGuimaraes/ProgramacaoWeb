// Componente de formulário para criar/editar produtos.
// Reutilizável para cadastro e edição.
import { useState, useEffect } from 'react';
import './ProdutoForm.css';

/**
 * Formulário de Produto
 * @param {Object} props
 * @param {Object} props.produtoInicial - Produto para edição (opcional)
 * @param {Function} props.onSubmit - Callback ao submeter (produto) => void
 * @param {Function} props.onCancelar - Callback ao cancelar
 * @param {boolean} props.isEdicao - Se é modo edição ou criação
 */
function ProdutoForm({ produtoInicial = null, onSubmit, onCancelar, isEdicao = false }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [errors, setErrors] = useState({});

  // Preenche os campos se estiver editando
  useEffect(() => {
    if (produtoInicial) {
      setNome(produtoInicial.nome || '');
      setPreco(produtoInicial.preco?.toString() || '');
    }
  }, [produtoInicial]);

  // Validação simples
  const validar = () => {
    const novosErros = {};
    
    if (!nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    }
    
    if (!preco || isNaN(parseFloat(preco)) || parseFloat(preco) <= 0) {
      novosErros.preco = 'Preço deve ser um número maior que zero';
    }
    
    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validar()) return;
    
    // Monta o objeto produto
    const produto = {
      nome: nome.trim(),
      preco: parseFloat(preco),
    };
    
    onSubmit(produto);
  };

  return (
    <form onSubmit={handleSubmit} className="produto-form">
      <h2>{isEdicao ? 'Editar Produto' : 'Novo Produto'}</h2>
      
      <div className="form-group">
        <label htmlFor="nome">Nome do Produto</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Notebook Dell"
          className={errors.nome ? 'error' : ''}
        />
        {errors.nome && <span className="error-message">{errors.nome}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="preco">Preço (R$)</label>
        <input
          type="number"
          id="preco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder="Ex: 2500.00"
          step="0.01"
          className={errors.preco ? 'error' : ''}
        />
        {errors.preco && <span className="error-message">{errors.preco}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {isEdicao ? 'Atualizar' : 'Cadastrar'}
        </button>
        <button type="button" onClick={onCancelar} className="btn btn-secondary">
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default ProdutoForm;
