import { TextField, Button, Stack, CircularProgress } from "@mui/material";

export default function FormProduto({
  produto,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) {
  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          name="nome"
          value={produto.nome}
          onChange={onChange}
          required
        />
        <TextField
          label="Preço"
          name="preco"
          type="number"
          value={produto.preco}
          onChange={onChange}
          required
          inputProps={{ step: "0.01", min: "0" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </Stack>
    </form>
  );
}
