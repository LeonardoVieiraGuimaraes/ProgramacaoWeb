// Serviço para comunicação com a API de produtos.
// Base URL: https://proweb.leoproti.com.br
// Documentação: https://proweb.leoproti.com.br/swagger-ui/index.html
import axios from 'axios';

const API_BASE_URL = 'https://proweb.leoproti.com.br';

// Interface TypeScript para o tipo Produto (comentada para JS)
// interface Produto {
//   id?: number;
//   nome: string;
//   preco: number;
// }

/**
 * GET /produtos - Lista todos os produtos
 * @returns {Promise<Array>} Lista de produtos
 */
export const listarProdutos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    throw error;
  }
};

/**
 * GET /produtos/{id} - Busca um produto por ID
 * @param {number} id - ID do produto
 * @returns {Promise<Object>} Produto encontrado
 */
export const obterProduto = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter produto ${id}:`, error);
    throw error;
  }
};

/**
 * POST /produtos - Cria um novo produto
 * @param {Object} produto - { nome: string, preco: number }
 * @returns {Promise<Object>} Produto criado
 */
export const criarProduto = async (produto) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/produtos`, produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};

/**
 * PUT /produtos/{id} - Atualiza um produto existente
 * @param {number} id - ID do produto
 * @param {Object} produto - { nome: string, preco: number }
 * @returns {Promise<Object>} Produto atualizado
 */
export const atualizarProduto = async (id, produto) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/produtos/${id}`, produto);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar produto ${id}:`, error);
    throw error;
  }
};

/**
 * DELETE /produtos/{id} - Remove um produto
 * @param {number} id - ID do produto
 * @returns {Promise<void>}
 */
export const excluirProduto = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/produtos/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir produto ${id}:`, error);
    throw error;
  }
};

export default {
  listarProdutos,
  obterProduto,
  criarProduto,
  atualizarProduto,
  excluirProduto,
};
