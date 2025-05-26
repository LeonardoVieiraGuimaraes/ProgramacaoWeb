import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function NavBar() {
  const location = useLocation();
  return (
    <AppBar position="static" sx={{ borderRadius: 0 }}>
      <Toolbar>
        <Stack direction="row" spacing={2}>
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
