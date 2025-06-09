import axios from "axios";

export interface Produto {
  id?: number;
  nome: string;
  preco: number;
}

const API_URL = "http://leoproti.com.br:8004/produtos";

const listar = async (): Promise<Produto[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};

const obter = async (id: number): Promise<Produto> => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

const criar = async (produto: Produto): Promise<Produto> => {
  const { data } = await axios.post(API_URL, produto);
  return data;
};

const atualizar = async (id: number, produto: Produto): Promise<Produto> => {
  const { data } = await axios.put(`${API_URL}/${id}`, produto);
  return data;
};

const excluir = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export default {
  listar,
  obter,
  criar,
  atualizar,
  excluir,
};
