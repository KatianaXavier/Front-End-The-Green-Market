import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Categoria } from "../../../models/Categoria";
import { getAll } from "../../../services/Services";
import useLocalStorage from "react-use-localstorage";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

export function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const history = useNavigate();
  async function getAllCategoria() {
    await getAll("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllCategoria();
  }, []);

  useEffect(() => {
    if (token === "") {
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
  }, []);

  return (
    <>
      <Link to={"/criarCategoria"}>
        <Button color="secondary" variant="contained" size="small">
          Cadastrar Categoria
        </Button>
      </Link>

      {categorias.length === 0 && (
        <div className="container">
          <span className="loader"></span>
        </div>
      )}

      <div className="listaCategoria">
        {categorias.map((categoria) => (
          // <Grid item marginY={2} mx={4}>
          <Card variant="outlined" className="cardCategoria">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Categoria:
              </Typography>
              <Typography variant="h5" component="h2">
                {categoria.nomeCategoria}
              </Typography>
              <Typography variant="h6" component="h6">
                {categoria.descricaoCategoria}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/editarCategoria/${categoria.idCategoria}`}>
                <Button color="primary" variant="contained" size="small">
                  Editar
                </Button>
              </Link>
              <Link to={`/deletarCategoria/${categoria.idCategoria}`}>
                <Button color="error" variant="contained" size="small">
                  Deletar
                </Button>
              </Link>
            </CardActions>
          </Card>
          // </Grid>
        ))}
      </div>
    </>
  );
}
