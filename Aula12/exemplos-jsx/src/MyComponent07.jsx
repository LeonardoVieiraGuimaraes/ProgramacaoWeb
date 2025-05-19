import React from "react";
import { useNavigate } from "react-router-dom";

const MyComponent07 = () => {
  const navigate = useNavigate();

  const jumpTo = (route) => {
    navigate(route);
  };

  return (
    <div>
      <h1>MyComponent07</h1>
      <p>Bem-vindo ao MyComponent07!</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => jumpTo("/scenes/first")}
          >
            Ir para First Scene
          </button>
        </li>
        <li>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => jumpTo("/scenes/second")}
          >
            Ir para Second Scene
          </button>
        </li>
        <li>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => jumpTo("/scenes/third")}
          >
            Ir para Third Scene
          </button>
        </li>
      </ul>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={() => jumpTo("/")}
      >
        Voltar para Home
      </button>
    </div>
  );
};

export default MyComponent07;
