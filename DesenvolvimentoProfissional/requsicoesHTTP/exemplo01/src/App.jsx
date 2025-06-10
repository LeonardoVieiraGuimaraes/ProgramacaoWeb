import "./App.css"; // Importa o arquivo de estilos global da aplicação
import GeminiPrompt from "./components/GeminiPrompt"; // Importa o componente GeminiPrompt, responsável pela interação com o usuário
import "./assets/styles/chatbot.css"; // Importa o arquivo de estilos específico do chatbot

// Função principal do componente App
function App() {
  // Retorna o JSX que define a estrutura visual do aplicativo
  return (
    // Div principal com a classe para estilização do chatbot
    <div className="chatbot-container">
      {/* Cabeçalho do chatbot exibindo o título */}
      <div className="chatbot-header">Gemini API - Exemplo</div>
      {/* Componente que lida com a entrada do usuário e exibe respostas */}
      <GeminiPrompt />
    </div>
  );
}

// Exporta o componente App como padrão do módulo
export default App;
