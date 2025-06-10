// Importa a biblioteca axios para requisições HTTP
import axios from "axios";

// URL base da API de produtos
const API_URL = "http://leoproti.com.br:8004/produtos";

// Função para listar todos os produtos
const listar = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

// Função para obter um produto pelo id
const obter = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

// Função para criar um novo produto
const criar = async (produto) => {
  const { data } = await axios.post(API_URL, produto);
  return data;
};

// Função para atualizar um produto existente
const atualizar = async (id, produto) => {
  const { data } = await axios.put(`${API_URL}/${id}`, produto);
  return data;
};

// Função para excluir um produto pelo id
const excluir = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// Exporta todas as funções como um objeto
export default {
  listar,
  obter,
  criar,
  atualizar,
  excluir,
};
