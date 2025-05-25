// Importa hooks do React para estado, efeito colateral e referência
import { useState, useEffect, useRef } from "react";
// Importa a função para gerar conteúdo usando a API Gemini
import { gerarConteudoGemini } from "../services/geminiApi";
// Importa o componente para renderizar markdown
import ReactMarkdown from "react-markdown";

// Define o componente funcional GeminiPrompt
function GeminiPrompt() {
  // Estado para armazenar o texto digitado pelo usuário
  const [prompt, setPrompt] = useState("");
  // Estado para armazenar todas as mensagens do chat (usuário e bot)
  const [mensagens, setMensagens] = useState([]);
  // Estado para indicar se está carregando uma resposta da API
  const [carregando, setCarregando] = useState(false);
  // Estado para armazenar mensagens de erro
  const [erro, setErro] = useState("");
  // Estado para mostrar o texto sendo "digitado" pelo bot (efeito máquina de escrever)
  const [digitando, setDigitando] = useState("");
  // Referência para o final da lista de mensagens (para scroll automático)
  const messagesEndRef = useRef(null);

  // Efeito para rolar automaticamente para a última mensagem sempre que mensagens, erro ou digitando mudarem
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensagens, erro, digitando]);

  // Função para simular o efeito de máquina de escrever ao exibir a resposta do bot
  const escreverComoMaquina = (texto, callback) => {
    let i = 0; // Índice do caractere atual
    setDigitando(""); // Limpa o texto digitando
    function escrever() {
      setDigitando((prev) => prev + texto.charAt(i)); // Adiciona um caractere por vez
      i++;
      if (i < texto.length) {
        setTimeout(escrever, 10); // Chama novamente após 10ms até terminar o texto
      } else if (callback) {
        callback(); // Chama o callback ao finalizar
      }
    }
    escrever();
  };

  // Função chamada ao enviar o formulário (mensagem do usuário)
  const handleEnviar = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    setCarregando(true); // Indica que está carregando
    setErro(""); // Limpa erros anteriores
    setMensagens((msgs) => [...msgs, { type: "user", text: prompt }]); //
    // Explicação:
    // - setMensagens: função para atualizar o estado 'mensagens'.
    // - (msgs) => [...msgs, { type: "user", text: prompt }]:
    //   - 'msgs' é o valor atual do estado (array de mensagens).
    //   - [...msgs, ...]: cria um novo array copiando todas as mensagens já existentes.
    //   - { type: "user", text: prompt }: adiciona um novo objeto ao final do array, representando a mensagem do usuário.
    //     - type: "user" indica que a mensagem foi enviada pelo usuário.
    //     - text: prompt é o texto digitado pelo usuário.
    // Assim, essa linha adiciona a nova mensagem do usuário ao histórico do chat, preservando as anteriores.
    setPrompt(""); // Limpa o campo de entrada
    setDigitando("Digitando..."); // Mostra que o bot está digitando
    try {
      // Chama a API Gemini para obter a resposta
      const data = await gerarConteudoGemini(prompt);
      // Extrai a resposta do objeto retornado pela API
      const resposta =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta";
      // Explicação:
      // - data: é o objeto retornado pela API Gemini.
      // - ?. (optional chaining): garante que, se alguma dessas propriedades não existir, não ocorre erro, apenas retorna undefined.
      // - candidates: array de possíveis respostas da API.
      // - [0]: pega o primeiro candidato (normalmente a resposta principal).
      // - content: objeto que contém as partes da resposta.
      // - parts: array de partes da resposta (pode ser dividido em vários trechos).
      // - [0]: pega a primeira parte.
      // - text: o texto da resposta propriamente dito.
      // - Se algum desses itens não existir, retorna "Sem resposta" como valor padrão.

      setDigitando(""); // Limpa o texto do estado 'digitando', ou seja, para de mostrar o efeito de digitação do bot.
      // Usa o efeito máquina de escrever para exibir a resposta
      escreverComoMaquina(resposta, () => {
        setMensagens((msgs) => [...msgs, { type: "bot", text: resposta }]); // Adiciona a resposta do bot ao chat
        setDigitando(""); // Limpa o texto digitando
      });
    } catch {
      // Em caso de erro na requisição
      setDigitando(""); // Limpa o texto digitando
      setMensagens((msgs) => [
        ...msgs,
        { type: "bot", text: "Erro ao consultar a API do Gemini" },
      ]); // Adiciona mensagem de erro ao chat
      setErro("Erro ao consultar a API do Gemini"); // Atualiza o estado de erro
    }
    setCarregando(false); // Finaliza o carregamento
  };

  // JSX que define a interface do componente
  return (
    <div className="gemini-container">
      {/* Título do chatbot */}
      <h2 className="gemini-title">Gemini API</h2>
      {/* Área onde as mensagens do chat são exibidas */}
      <div className="chatbot-messages">
        {/* Renderiza todas as mensagens do chat */}
        {mensagens.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
        {/* Exibe o texto sendo digitado pelo bot, se houver */}
        {digitando && (
          <div className="message bot">
            <ReactMarkdown>{digitando}</ReactMarkdown>
          </div>
        )}
        {/* Exibe mensagem de erro, se houver */}
        {erro && (
          <div className="message bot" style={{ color: "#ff4d4f" }}>
            {erro}
          </div>
        )}
        {/* Elemento invisível para garantir o scroll automático */}
        <div ref={messagesEndRef} />
      </div>
      {/* Formulário para enviar nova mensagem */}
      <form className="chatbot-form" onSubmit={handleEnviar}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)} // Atualiza o estado ao digitar
          placeholder="Digite sua pergunta"
          disabled={carregando} // Desabilita enquanto carrega
          required // Campo obrigatório
        />
        <button type="submit" disabled={carregando || !prompt}>
          {carregando ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}

// Exporta o componente GeminiPrompt como padrão
export default GeminiPrompt;
