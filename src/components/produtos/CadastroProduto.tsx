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

import { Produto } from "../../models/Produto";
import { useNavigate, useParams } from "react-router-dom";
import { Categoria } from "../../models/Categoria";
import { getAll, getById, put, post } from "../../services/Services";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

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
        alert("Produto atualizada com sucesso");
        history("/produtos");
      } catch (error) {
        alert("Falha ao atualizar o produto");
      }
    } else {
      try {
        await post("/produtos", produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert("produto cadastrado com sucesso");
        history("/produtos");
      } catch (error) {
        alert("Falha ao cadastrar o produto");
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
      alert("sem token não rola");
      history("/login");
    }
  });

  return (
    <>
      <Container maxWidth={"sm"}>
        <form className="cadastroPost" onSubmit={onSubmit}>
          <Typography marginTop={4} variant="h3" align="center">
            Cadastrar pruduto
          </Typography>
          <TextField
            value={produto.nomeProduto}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Titulo da pruduto"
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
            label="descrição do produto"
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
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={categoria.idCategoria === 0}
          >
            {categoria.idCategoria === 0
              ? "selecione uma categoria"
              : "cadastrar"}
          </Button>
        </form>
      </Container>
    </>
  );
}
