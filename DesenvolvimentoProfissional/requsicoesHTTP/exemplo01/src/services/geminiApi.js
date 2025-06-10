// Importa a biblioteca axios para fazer requisições HTTP
import axios from "axios";

// Obtém a chave da API Gemini do arquivo de variáveis de ambiente
const GEMINI_API_KEY = 'AIzaSyC3B_QaygO9GTJy0nzeMbEWm-LFkEOUUgg';

// Cria uma instância do axios com configurações padrão para a API Gemini
const geminiApi = axios.create({
  // Define a URL base para as requisições
  baseURL:
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
  // Define os headers padrão para as requisições
  headers: {
    "Content-Type": "application/json",
  },
});

// Função assíncrona para gerar conteúdo usando a API Gemini
export const gerarConteudoGemini = async (texto) => {
  // Monta o corpo da requisição no formato esperado pela API
  const body = {
    contents: [
      {
        parts: [{ text: texto }],
      },
    ],
  };
  // Faz uma requisição POST para a API, passando a chave e o corpo
  const response = await geminiApi.post(`?key=${GEMINI_API_KEY}`, body);
  // Retorna apenas os dados da resposta
  return response.data;
};
