import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import "./ListaCategoria.css"
import { useEffect, useState } from "react";
import { Categoria } from "../../../models/Categoria";
import { getAll } from "../../../services/Services";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

export function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const id = useSelector<TokenState, TokenState["id"]>(
    (state) => state.id
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
      <Grid container>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"right"} margin={"40px 40px 0 40px"}>
            <Link to={"/criarCategoria"}>
              <Button
                style={{ background: "#2d5540", color: "#fff" }}
                type="submit"
                size="large"
                variant="contained"
              >
                Cadastrar Categoria
              </Button>
            </Link>
          </Box>
        </Grid>

        {categorias.length === 0 && (
          <div className="container">
            <span className="loader"></span>
          </div>
        )}

        <Grid item xs={12}>
          <Box display={'flex'} flexWrap={'wrap'} gap={4} margin={'0px 20px 20px 20px'} className="alinhamentoCardsCategoria">
            {categorias.map((categoria) => (
              <Box m={4}>
                <Card variant="outlined" className="cardCategoria" style={{ display: 'flex', flexDirection: 'column', height: '250px', boxShadow: '0px 1px 19px 6px rgba(194,194,194,1)', borderRadius: '11px 11px 11px 11px', padding: "20px" }} sx={{ width: 350 }}>
                  <CardContent style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h5" component="h2">
                      {categoria.nomeCategoria}
                    </Typography>
                    <Typography flex={1} className="descricaoCategoria" variant="h6" component="h6">
                      {categoria.descricaoCategoria}
                    </Typography>
                  </CardContent>
                  {categoria?.produtos?.length === 0 && (
                    <CardActions style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                      <Link to={`/editarCategoria/${categoria.idCategoria}`} style={{ flex: '1' }}>
                        <Button style={{ background: "#2d5540", color: "#fff", width: '100%' }} variant="contained" size="small">
                          Editar
                        </Button>
                      </Link>
                      <Link to={`/deletarCategoria/${categoria.idCategoria}`} style={{ flex: '1' }}>
                        <Button style={{ background: "#550C18", color: "#fff", width: '100%' }} variant="contained" size="small">
                          Deletar
                        </Button>
                      </Link>
                    </CardActions>
                  )}
                  <CardContent>
                    <Typography variant="caption" component="h6">
                      {categoria?.produtos?.length === 0 ? '' : 'Apenas categorias sem produtos podem ser deletadas'}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
