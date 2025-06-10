// Importa hooks e componentes do Material UI para tabela, loading, ícones e navegação
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import produtoService from "../services/produtoService";

// Página que exibe a lista de produtos
export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]); // Estado para lista de produtos
  const [loading, setLoading] = useState(true); // Estado para loading
  const navigate = useNavigate(); // Hook para navegação

  // Função para carregar produtos da API
  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const lista = await produtoService.listar();
      setProdutos(lista);
    } finally {
      setLoading(false);
    }
  };

  // Carrega produtos ao montar o componente
  useEffect(() => {
    carregarProdutos();
  }, []);

  // Função para deletar um produto
  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      await produtoService.excluir(id);
      carregarProdutos();
    }
  };

  // Exibe loading enquanto carrega
  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;

  // Renderiza a tabela de produtos
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ boxShadow: "none", background: "transparent" }}
    >
      {/* Título da página */}
      <Typography
        variant="h5"
        sx={{
          m: 2,
          textAlign: "center",
          fontWeight: "bold",
          color: "#1976d2",
        }}
      >
        Lista de Produtos
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Renderiza cada produto em uma linha */}
          {produtos.map((produto) => (
            <TableRow key={produto.id}>
              <TableCell>{produto.id}</TableCell>
              <TableCell>{produto.nome}</TableCell>
              <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
              <TableCell align="right">
                {/* Botão para editar produto */}
                <IconButton
                  color="primary"
                  onClick={() => navigate(`/editar/${produto.id}`)}
                >
                  <EditIcon />
                </IconButton>
                {/* Botão para excluir produto */}
                <IconButton
                  color="error"
                  onClick={() => handleDelete(produto.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {/* Caso não haja produtos cadastrados */}
          {produtos.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Nenhum produto cadastrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
