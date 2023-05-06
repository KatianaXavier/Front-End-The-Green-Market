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
import './ListaProduto.css'
import { toast } from "react-toastify";
import { Grid } from "@material-ui/core";

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
      toast.error("É necessário fazer login.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
      <Grid container>
        <Grid item xs={12}>
          <Box display={'flex'} justifyContent={'right'} margin={'15px 40px'}>

            <Link to={"/criarProduto"}>
              <Button style={{ background: "#2d5540", color: "#fff" }}
                type="submit"
                size="large"
                variant="contained"
              >
                Cadastrar Produto
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display={'flex'} flexWrap={'wrap'}>
            {produtos.map((produto) => (
              <Box m={4}>
                <Card style={{ height: '570px'}} sx={{maxWidth: 400}}>
                  <CardContent style={{ height: '90%' }}>
                    <Box width={'100%'} height={'45%'}>
                      <img alt={`Foto do produto: ${produto.nomeProduto}`} className="imagensProdutos" src={produto.fotoProduto!} />
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      <strong>{produto.nomeProduto}</strong>
                    </Typography>
                    <Typography gutterBottom component="h2">
                      Categoria: {produto.categoria?.descricaoCategoria}
                    </Typography>
                    <Typography variant="body1" component="h2" gutterBottom textAlign={'justify'} height={'100px'}>
                      Descrição: {produto.descricaoProduto}
                    </Typography>
                    <Typography variant="h5" component="p" gutterBottom>
                      {console.log(produto.precoProduto)}
                      {`R$ ${(produto.precoProduto).toFixed(2)}`}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ border: '1px solid red ' }}>
                    <Link to={`/editarProduto/${produto.idProduto}`}>
                      <Button style={{ background: "#2d5540", color: "#fff" }} variant="contained" size="small">
                        Editar
                      </Button>
                    </Link>
                    <Link to={`/deletarProduto/${produto.idProduto}`}>
                      <Button style={{ background: "#550C18", color: "#fff" }} variant="contained" size="small">
                        Deletar
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
