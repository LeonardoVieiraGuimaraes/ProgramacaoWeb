// Importa componentes do Material UI para inputs, botões, layout e loading
import { TextField, Button, Stack, CircularProgress } from "@mui/material";

// Componente de formulário para cadastro/edição de produto
export default function FormProduto({
  produto,    // Objeto com os dados do produto (nome, preco)
  loading,    // Booleano para exibir loading enquanto carrega/salva
  onChange,   // Função chamada ao alterar campos do formulário
  onSubmit,   // Função chamada ao submeter o formulário
  onCancel,   // Função chamada ao clicar em cancelar
}) {
  // Se estiver carregando, exibe o spinner de loading centralizado
  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;

  // Renderiza o formulário de produto
  return (
    <form onSubmit={onSubmit}>
      {/* Stack para espaçamento vertical entre os campos */}
      <Stack spacing={2}>
        {/* Campo de texto para o nome do produto */}
        <TextField
          label="Nome"
          name="nome"
          value={produto.nome}
          onChange={onChange}
          required
        />
        {/* Campo de texto para o preço do produto, apenas números */}
        <TextField
          label="Preço"
          name="preco"
          type="number"
          value={produto.preco}
          onChange={onChange}
          required
          // inputProps={{ step: "0.01", min: "0" }} // Permite decimais e mínimo 0
        />
        {/* Botão para submeter o formulário */}
        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
        {/* Botão para cancelar a operação */}
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </Stack>
    </form>
  );
}
