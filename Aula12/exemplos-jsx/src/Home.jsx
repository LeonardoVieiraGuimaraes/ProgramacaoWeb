import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "./routes";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Escolha um componente para navegar:</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {routes
          .filter((route) => route.path.startsWith("/componente")) // Filtra apenas os componentes 01 a 07
          .map((route) => (
            <li key={route.path}>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(route.path)}
              >
                Ir para {route.path.replace("/componente", "MyComponent")}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
