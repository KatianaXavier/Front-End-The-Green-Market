import { Grid, Typography, Button, Card, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Categoria } from '../../../models/Categoria';
import { deleteId, getById } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

export  function DeleteCategoria() {
  const history = useNavigate();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  )
  const {id} = useParams<{id: string}>()

  const [categoria, setCategoria] = useState<Categoria>()

  useEffect(() => {
    if (token === '') {
      alert('Sem Autorização');
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
    if (id !== undefined){
        getCategoriaById(id)
    }
  })

  function deleteCategoria() {
    deleteId(`/categorias/${id}`, {
      headers: {
        Authorization: token
      }
    })
    alert('Categoria deletado com sucesso.')
    history('/categorias')
  }

  function voltar(){
    history('/categorias')
  }

  return (
    <>
      <Grid container justifyContent={'center'} mt={4}>
        <Grid item xs={3}>
         <Card variant='outlined'>
         <Typography variant='h3' gutterBottom align='center'>Deletar Categoria</Typography>
          <Typography variant='body1' gutterBottom align='center'>Você tem certeza de que deseja deletar a Categoria: <br /> <strong>{categoria?.descricaoCategoria}</strong> </Typography>

          <Box display='flex'>
            <Button variant='contained' color='primary' onClick={voltar} fullWidth>Não</Button>
            <Button variant='contained' color='error' onClick={deleteCategoria} fullWidth >Sim</Button>
          </Box>
         </Card>

        </Grid>
      </Grid>
    </>
  )
}

