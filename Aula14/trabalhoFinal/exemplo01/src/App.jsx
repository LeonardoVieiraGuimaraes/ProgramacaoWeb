import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: 32 }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
