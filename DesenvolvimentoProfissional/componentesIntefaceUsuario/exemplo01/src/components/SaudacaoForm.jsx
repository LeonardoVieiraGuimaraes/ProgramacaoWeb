import { Typography, TextField, Button } from "@mui/material";

export default function SaudacaoForm({ nome, setNome }) {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" color="primary">
        Bem-vindo ao Exemplo MUI
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Digite seu nome abaixo e clique no botão para ser saudado!
      </Typography>
      <TextField
        label="Seu nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{ mt: 1 }}
      >
        Olá, {nome || "visitante"}!
      </Button>
    </>
  );
}
