import { Grid, Typography, Button, Card, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Produto } from "../../../models/Produto";
import { deleteId, getById } from "../../../services/Services";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

export function DeleteProduto() {
  const history = useNavigate();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const { id } = useParams<{ id: string }>();

  const [produto, setProduto] = useState<Produto>();

  async function findById(id: string) {
    await getById(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  function deletarProduto() {
    deleteId(`/produtos/${id}`, {
      headers: {
        Authorization: token,
      },
    }).finally(() => {
      toast.success("Produto deletado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      history("/produtos");
    });
  }

  function voltar() {
    history("/produtos");
  }

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
      history("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  });

  return (
    <>
      <Grid container justifyContent={"center"} mt={4}>
        <Grid item xs={4}>
          <Card variant="outlined">
            <Typography variant="h3" gutterBottom align="center">
              Deletar Produto
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
              Você tem certeza de que deseja deletar o produto com nome: <br />{" "}
              <strong>{produto?.nomeProduto}</strong>{" "}
            </Typography>

            <Box display="flex">
              <Button
                variant="contained"
                color="primary"
                onClick={voltar}
                fullWidth
              >
                Não
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={deletarProduto}
                fullWidth
              >
                Sim
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
