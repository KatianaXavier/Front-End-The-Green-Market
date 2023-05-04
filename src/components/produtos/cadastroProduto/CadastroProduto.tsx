import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Button,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
// import './CadastroPruduto.css';

import { Produto } from "../../../models/Produto";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Categoria } from "../../../models/Categoria";
import { getAll, getById, put, post } from "../../../services/Services";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { Box } from "@mui/material";

export function CadastroProduto() {
  const history = useNavigate();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [produto, setProduto] = useState<Produto>({
    idProduto: 0,
    nomeProduto: "",
    descricaoProduto: "",
    qtdProduto: 0,
    precoProduto: 0,
    fotoProduto: "",
    categoria: null,
    usuario: null,
  });

  const [categoria, setCategoria] = useState<Categoria>({
    idCategoria: 0,
    nomeCategoria: "",
    descricaoCategoria: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categoria: categoria,
    });
  }

  async function getAllCategorias() {
    await getAll("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdProduto(id: string) {
    await getById(`produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await put("/produtos", produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Produto atualizado com sucesso!", {
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
      } catch (error) {
        toast.error("Falha ao atualizar o produto.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      try {
        await post("/produtos", produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Produto cadastrado com sucesso!", {
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
      } catch (error) {
        toast.error("Falha ao cadastrar o produto.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  }

  useEffect(() => {
    getAllCategorias();
    if (id !== undefined) {
      findByIdProduto(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  useEffect(() => {
    if (token === "") {
      console.log(token);
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
  });

  return (
    <>
      <Container maxWidth={"sm"}>
        <form onSubmit={onSubmit}>
          <Box display={'flex'} gap={4} flexDirection={'column'}>
          <Typography marginTop={4} variant="h3" align="center">
            {produto.idProduto !== 0 ? 'Editar produto' : 'Cadastrar produto'}
          </Typography>
          <TextField
            value={produto.nomeProduto}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Título do produto"
            name="nomeProduto"
            id="titulo"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={produto.descricaoProduto}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Descrição do produto"
            name="descricaoProduto"
            id="texto"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
          />
          <TextField
            type="number"
            value={produto.qtdProduto}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Quantidade do produto"
            name="qtdProduto"
            id="texto"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
          />
          <TextField
            type="number"
            value={produto.precoProduto}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Preço do produto"
            name="precoProduto"
            id="texto"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
          />
          <TextField
            value={produto.fotoProduto}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Foto do produto"
            name="fotoProduto"
            id="texto"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
          />

          <FormControl>
            <InputLabel>Categoria</InputLabel>
            <Select
              variant="standard"
              onChange={(event) =>
                getById(`/categorias/${event.target.value}`, setCategoria, {
                  headers: { Authorization: token },
                })
              }
            >
              {categorias.map((categoria) => (
                <MenuItem value={categoria.idCategoria}>
                  {categoria.descricaoCategoria}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Escolha uma categoria para o produto
            </FormHelperText>
          </FormControl>
          <Box display={'flex'} gap={4} justifyContent={'center'}>
          <Button
            style={{ color: '#fff', background: '#2D5540' }}
            variant="contained"
            // color="primary"
            type="submit"
            disabled={categoria.idCategoria === 0}
          >
            {categoria.idCategoria === 0
              ? "Selecione uma categoria"
              : id === undefined
                ? "Cadastrar"
                : "Editar"}
          </Button>
            <Link to={`/produtos`}>
              <Button style={{ background: "#550C18", color: "#fff" }} variant="contained">
                Cancelar
              </Button>
            </Link>
          </Box>
          </Box>
        </form>
      </Container>
    </>
  );
}
