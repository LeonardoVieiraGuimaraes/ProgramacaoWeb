import React from "react";
import { useNavigate } from "react-router-dom";

function SecondScene() {
  const navigator = useNavigate();

  const jumpTo = (route) => {
    navigator(route);
  };

  return (
    <div>
      <h1>Second Scene</h1>
      <p>Bem-vindo à segunda cena!</p>
      <button onClick={() => jumpTo("/componente07")}>
        Voltar para MyComponent07
      </button>
    </div>
  );
}

export default SecondScene;
