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

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const lista = await produtoService.listar();
      setProdutos(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      await produtoService.excluir(id);
      carregarProdutos();
    }
  };

  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ boxShadow: "none", background: "transparent" }}
    >
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
          {produtos.map((produto) => (
            <TableRow key={produto.id}>
              <TableCell>{produto.id}</TableCell>
              <TableCell>{produto.nome}</TableCell>
              <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="primary"
                  onClick={() => navigate(`/editar/${produto.id}`)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(produto.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
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
