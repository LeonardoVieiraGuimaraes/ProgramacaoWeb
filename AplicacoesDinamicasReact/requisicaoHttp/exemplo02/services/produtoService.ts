/**
 * Serviço de Produtos - Camada de Acesso à API
 * 
 * Este arquivo centraliza todas as requisições HTTP para a API de produtos.
 * Utilizamos o axios para fazer as requisições HTTP de forma simplificada.
 * 
 * IMPORTANTE: Este é o mesmo serviço da versão web, mas adaptado para TypeScript
 * e React Native/Expo. As requisições HTTP funcionam da mesma forma!
 */

import axios from 'axios';

// URL base da API - aponta para o servidor remoto
const API_BASE_URL = 'https://proweb.leoproti.com.br/produtos';

/**
 * Interface TypeScript que define a estrutura de um Produto
 * Isso ajuda o TypeScript a validar nosso código e prevenir erros
 */
export interface Produto {
  id?: number;       // ? significa que é opcional (só existe após criar no servidor)
  nome: string;      // nome do produto (obrigatório)
  preco: number;     // preço do produto (obrigatório)
}

/**
 * Listar Todos os Produtos - GET /produtos
 * 
 * Faz uma requisição GET para buscar todos os produtos cadastrados
 * Retorna um array de produtos ou lança um erro
 */
export const listarProdutos = async (): Promise<Produto[]> => {
  try {
    // axios.get retorna uma Promise com a resposta da API
    const response = await axios.get(API_BASE_URL);
    
    // response.data contém o corpo da resposta (array de produtos)
    return response.data;
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    throw error; // Repassa o erro para quem chamou a função
  }
};

/**
 * Obter um Produto Específico - GET /produtos/{id}
 * 
 * Busca os detalhes de um produto específico pelo ID
 * 
 * @param id - ID do produto a ser buscado
 * @returns Objeto do produto encontrado
 */
export const obterProduto = async (id: number): Promise<Produto> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter produto ${id}:`, error);
    throw error;
  }
};

/**
 * Criar Novo Produto - POST /produtos
 * 
 * Envia os dados de um novo produto para ser criado no servidor
 * O servidor retorna o produto criado com o ID gerado
 * 
 * @param produto - Objeto com nome e preco do produto
 * @returns Produto criado (incluindo o ID gerado)
 */
export const criarProduto = async (produto: Omit<Produto, 'id'>): Promise<Produto> => {
  try {
    // axios.post envia os dados no corpo da requisição
    const response = await axios.post(API_BASE_URL, produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};

/**
 * Atualizar Produto Existente - PUT /produtos/{id}
 * 
 * Atualiza os dados de um produto existente
 * 
 * @param id - ID do produto a ser atualizado
 * @param produto - Novos dados do produto
 * @returns Produto atualizado
 */
export const atualizarProduto = async (id: number, produto: Omit<Produto, 'id'>): Promise<Produto> => {
  try {
    // axios.put atualiza o recurso no servidor
    const response = await axios.put(`${API_BASE_URL}/${id}`, produto);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar produto ${id}:`, error);
    throw error;
  }
};

/**
 * Excluir Produto - DELETE /produtos/{id}
 * 
 * Remove um produto do servidor
 * 
 * @param id - ID do produto a ser excluído
 */
export const excluirProduto = async (id: number): Promise<void> => {
  try {
    // axios.delete remove o recurso do servidor
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir produto ${id}:`, error);
    throw error;
  }
};
