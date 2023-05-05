import { Grid, Typography, Button, Card, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Categoria } from '../../../models/Categoria';
import { deleteId, getById } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

export function DeleteCategoria() {
  const history = useNavigate();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  )
  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>()

  useEffect(() => {
    if (token === '') {
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
      history('/login');
    }
  }, []);

  async function getCategoriaById(id: string) {
    await getById(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    if (id !== undefined) {
      getCategoriaById(id)
    }
  })

  function deletarCategoria() {
    deleteId(`/categorias/${id}`, {
      headers: {
        Authorization: token
      }
    })
    toast.success("Categoria deletada com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    history('/categorias')
  }

  function voltar() {
    history('/categorias')
  }

  return (
    <>
      <Grid container justifyContent={'center'} mt={4} spacing={0}
        direction="column"
        alignItems="center" style={{ minHeight: '100vh'}}>
        <Grid item xs={2} height={'100%'} justifyContent={'center'} alignItems={'center'}>
          <Card variant='elevation' style={{ boxSizing: 'content-box', boxShadow: '10px 6px 20px 2px rgba(0, 0, 0, 0.2)', borderRadius: '11px 11px 11px 11px', marginBottom: '30px' }}>
            <Box padding={4} display="flex" flexDirection={"column"} gap={2}>
              <Typography variant='h3' gutterBottom align='center'>Deletar Categoria</Typography>
              <Typography variant='h5' gutterBottom align='justify'>Você tem certeza de que deseja deletar a Categoria: <strong>{categoria?.descricaoCategoria}</strong> </Typography>

              <Box display="flex" gap={4}>
                <Button
                  variant="contained"
                  style={{ background: "#2d5540", color: "#fff" }}
                  onClick={voltar}
                  fullWidth
                >
                  Não
                </Button>
                <Button
                  variant="contained"
                  style={{ background: "#550C18", color: "#fff" }}
                  onClick={deletarCategoria}
                  fullWidth
                >
                  Sim
                </Button>
              </Box>
            </Box>
          </Card>

        </Grid>
      </Grid>
    </>
  )
}

