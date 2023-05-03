import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { ChangeEvent, useEffect, useState } from "react";
import { Categoria } from "../../../models/Categoria";
import { getById, post, put } from "../../../services/Services";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

export function CadastroCategoria() {

    const history = useNavigate()

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )

    const { id } = useParams<{ id: string }>()

    const [categoria, setCategoria] = useState<Categoria>({
        idCategoria: 0,
        nomeCategoria: '',
        descricaoCategoria: ''
    })

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [event.target.name]: event.target.value
        })
    }

    async function getCategoriaById(id: string) {
        await getById(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            console.log('repetiu')
            getCategoriaById(id)
        }
    }, [])

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
             history('/login')
         }
    }, [])

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()

        if (id !== undefined) {
            try {
                await put('/categorias', categoria, setCategoria, {
                    headers: {
                        Authorization: token
                    }
                })
                toast.success("Categoria atualizada com sucesso!", {
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
            } catch (error) {
                toast.error("Erro ao editar categoria.", {
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
                await post('/categorias', categoria, setCategoria, {
                    headers: {
                        Authorization: token
                    },
                })
                toast.success("Categoria cadastrada com sucesso!", {
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
            } catch (error) {
                toast.error("Erro ao cadastrar categoria.", {
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

    return (
        <>
            <Grid container justifyContent={'center'} mt={4}>
                <Grid item xs={6}>
                    <Typography
                        align="center"
                        variant="h3"
                        gutterBottom
                        fontWeight={'bold'}
                    >
                        
                        {categoria.idCategoria !== 0 ? 'Editar categoria' : 'Cadastrar cagetoria'}
                    </Typography>
                    <form onSubmit={onSubmit}>
                        <Box display="flex" flexDirection={'column'} gap={2}>
                            <TextField
                                label="Nome da categoria"
                                name="nomeCategoria"
                                value={categoria.nomeCategoria}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    updateModel(event)
                                }
                            />
                            <TextField
                                label="Descrição da categoria"
                                name="descricaoCategoria"
                                value={categoria.descricaoCategoria}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    updateModel(event)
                                }
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={categoria.descricaoCategoria.length < 3}
                            >
                                {categoria.idCategoria !== 0 ? 'Editar categoria' : 'Cadastrar cagetoria'}
                            </Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    );

}