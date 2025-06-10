// Importa componentes do Material UI e ícones
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// Componente de barra de navegação superior
export default function NavBar() {
  const location = useLocation(); // Hook para saber a rota atual

  return (
    <AppBar position="static" sx={{ borderRadius: 0 }}>
      <Toolbar>
        {/* Stack para alinhar botões horizontalmente */}
        <Stack direction="row" spacing={2}>
          {/* Botão para a página de listagem de produtos */}
          <Button
            color={location.pathname === "/" ? "secondary" : "inherit"}
            variant={location.pathname === "/" ? "contained" : "text"}
            component={RouterLink}
            to="/"
            startIcon={<ListAltIcon />}
            sx={{ fontWeight: location.pathname === "/" ? "bold" : "normal" }}
          >
            Produtos
          </Button>
          {/* Botão para a página de novo produto */}
          <Button
            color={location.pathname === "/novo" ? "secondary" : "inherit"}
            variant={location.pathname === "/novo" ? "contained" : "text"}
            component={RouterLink}
            to="/novo"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              fontWeight: location.pathname === "/novo" ? "bold" : "normal",
            }}
          >
            Novo Produto
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
