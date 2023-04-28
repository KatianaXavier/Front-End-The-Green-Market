import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Produto } from "../../../models/Produto";
import { getAll } from "../../../services/Services";
import { addToken } from "../../../store/tokens/action";
import { TokenState } from "../../../store/tokens/tokensReducer";

export function ListaProduto() {
  const dispatch = useDispatch();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const history = useNavigate();

  useEffect(() => {
    if (token === "") {
      dispatch(addToken(token));
      alert("É necessário estar logado.");
      history("/login");
    }
  }, [token]);

  useEffect(() => {
    getAllProdutos();
  }, []);

  async function getAllProdutos() {
    await getAll("/produtos", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  return (
    <>
      <Link to={"/criarProduto"}>
        <Button color="secondary" variant="contained" size="small">
          Cadastrar Produto
        </Button>
      </Link>
      {produtos.map((produto) => (
        <Box>
          <Box m={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom component="h2">
                  Categoria: {produto.categoria?.descricaoCategoria}
                </Typography>
                <Typography variant="h4" color="textSecondary" gutterBottom>
                  Nome: {produto.nomeProduto}
                </Typography>
                <Typography variant="body1" component="h2" gutterBottom>
                  Descrição: {produto.descricaoProduto}
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                  Preço: {produto.precoProduto}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Foto: {produto.fotoProduto}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/editarProduto/${produto.idProduto}`}>
                  <Button color="primary" variant="contained" size="small">
                    Editar
                  </Button>
                </Link>
                <Link to={`/deletarProduto/${produto.idProduto}`}>
                  <Button color="secondary" variant="contained" size="small">
                    Deletar
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Box>
        </Box>
      ))}
    </>
  );
}
