import { useState } from 'react';

// Componente Quadrado: representa cada célula do tabuleiro
function Quadrado({ valor, aoClicarNoQuadrado }) {
  // Renderiza um botão que mostra o valor ('X', 'O' ou vazio)
  // aoClicarNoQuadrado é chamado quando o botão é clicado
  return (
    <button className="square" onClick={aoClicarNoQuadrado}>
      {valor}
    </button>
  );
}

// Componente Tabuleiro: representa o tabuleiro completo (3x3)
function Tabuleiro({ xEhProximo, quadrados, aoJogar }) {
  // Função chamada ao clicar em um quadrado
  function lidarClique(i) {
    // Se já houver um vencedor ou o quadrado já estiver preenchido, não faz nada
    if (calcularVencedor(quadrados) || quadrados[i]) {
      return;
    }
    // Cria uma cópia do estado atual dos quadrados
    const proximosQuadrados = quadrados.slice();
    // Define 'X' ou 'O' no quadrado clicado, dependendo do jogador da vez
    if (xEhProximo) {
      proximosQuadrados[i] = 'X';
    } else {
      proximosQuadrados[i] = 'O';
    }
    // Chama a função aoJogar passando o novo estado dos quadrados
    aoJogar(proximosQuadrados);
  }

  // Verifica se há um vencedor no estado atual do tabuleiro
  const vencedor = calcularVencedor(quadrados);
  let status;
  // Define a mensagem de status: vencedor ou próximo jogador
  if (vencedor) {
    status = 'Vencedor: ' + vencedor;
  } else {
    status = 'Próximo jogador: ' + (xEhProximo ? 'X' : 'O');
  }

  // Renderiza o status e as linhas do tabuleiro, cada célula é um Quadrado
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Quadrado valor={quadrados[0]} aoClicarNoQuadrado={() => lidarClique(0)} />
        <Quadrado valor={quadrados[1]} aoClicarNoQuadrado={() => lidarClique(1)} />
        <Quadrado valor={quadrados[2]} aoClicarNoQuadrado={() => lidarClique(2)} />
      </div>
      <div className="board-row">
        <Quadrado valor={quadrados[3]} aoClicarNoQuadrado={() => lidarClique(3)} />
        <Quadrado valor={quadrados[4]} aoClicarNoQuadrado={() => lidarClique(4)} />
        <Quadrado valor={quadrados[5]} aoClicarNoQuadrado={() => lidarClique(5)} />
      </div>
      <div className="board-row">
        <Quadrado valor={quadrados[6]} aoClicarNoQuadrado={() => lidarClique(6)} />
        <Quadrado valor={quadrados[7]} aoClicarNoQuadrado={() => lidarClique(7)} />
        <Quadrado valor={quadrados[8]} aoClicarNoQuadrado={() => lidarClique(8)} />
      </div>
    </>
  );
}

// Componente principal Jogo (Game): gerencia o estado do jogo e renderiza o tabuleiro e histórico
export default function Jogo() {
  // Estado: histórico de todos os movimentos (cada elemento é um array de 9 posições)
  const [historico, setHistorico] = useState([Array(9).fill(null)]);
  // Estado: qual o movimento atual (índice no histórico)
  const [movimentoAtual, setMovimentoAtual] = useState(0);
  // Determina se o próximo jogador é 'X' (par) ou 'O' (ímpar)
  const xEhProximo = movimentoAtual % 2 === 0;
  // Obtém o estado atual do tabuleiro a partir do histórico
  const quadradosAtuais = historico[movimentoAtual];

  // Função chamada quando um novo movimento é feito
  function aoJogar(proximosQuadrados) {
    // Cria um novo histórico até o movimento atual e adiciona o novo estado
    const proximoHistorico = [...historico.slice(0, movimentoAtual + 1), proximosQuadrados];
    setHistorico(proximoHistorico);
    setMovimentoAtual(proximoHistorico.length - 1);
  }

  // Função para voltar para um movimento anterior
  function irPara(movimento) {
    setMovimentoAtual(movimento);
  }

  // Cria a lista de botões para navegar pelo histórico de movimentos
  const movimentos = historico.map((quadrados, movimento) => {
    let descricao;
    if (movimento > 0) {
      descricao = 'Ir para o movimento #' + movimento;
    } else {
      descricao = 'Ir para o início do jogo';
    }
    return (
      <li key={movimento}>
        <button onClick={() => irPara(movimento)}>{descricao}</button>
      </li>
    );
  });

  // Renderiza o tabuleiro e a lista de movimentos
  return (
    <div className="game">
      <div className="game-board">
        <Tabuleiro xEhProximo={xEhProximo} quadrados={quadradosAtuais} aoJogar={aoJogar} />
      </div>
      <div className="game-info">
        <ol>{movimentos}</ol>
      </div>
    </div>
  );
}

// Função utilitária para verificar se há um vencedor no tabuleiro
function calcularVencedor(quadrados) {
  // Todas as combinações possíveis de vitória
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Verifica cada linha se todos os valores são iguais e não nulos
  for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
      return quadrados[a]; // Retorna 'X' ou 'O'
    }
  }
  return null; // Se não houver vencedor
}