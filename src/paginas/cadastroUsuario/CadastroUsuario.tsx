import { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../models/User";
import { cadastrarUsuario } from "../../services/Services"

export const CadastroUsuario = () => {
   const history = useNavigate();

   const [usuario, setUsuario] = useState<User>({
      idUsuario: 0,
      nomeUsuario: "",
      cpfUsuario: "",
      enderecoUsuario: "",
      telefoneUsuario: "",
      cepUsuario: "",
      usuario: "",
      fotoUsuario: "",
      senhaUsuario: "",
   });

   const [usuarioResult, setUsuarioResult] = useState<User>({
      idUsuario: 0,
      nomeUsuario: "",
      cpfUsuario: "",
      enderecoUsuario: "",
      telefoneUsuario: "",
      cepUsuario: "",
      usuario: "",
      fotoUsuario: "",
      senhaUsuario: ""
   });

   const [confirmarSenha, setConfirmarSenha] = useState<string>("");

   function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
      setConfirmarSenha(event.target.value);
   }
   function updateModel(event: ChangeEvent<HTMLInputElement>) {
      setUsuario({
         ...usuario,
         [event.target.name]: event.target.value,
      });
   }

   async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();

      if (confirmarSenha === usuario.senhaUsuario) {
         try {
             await cadastrarUsuario(
             	"/usuarios/cadastrar",
            	usuario,
            	setUsuarioResult
            );
            alert("Usuário cadastrado com sucesso");
         } catch (error) {
            console.error(error);
            alert("Por favor, verifique os campos");
         }
      } else {
         alert("As senhas não coincidem");
         setConfirmarSenha("");
         setUsuario({
            ...usuario,
            senhaUsuario: "",
         });
      }
   }

   useEffect(() => {
      if (usuarioResult.idUsuario !== 0) {
         history("/login");
      }
   }, [usuarioResult]);

   const back = () => {
      history("/login");
   };

   return (
      <>
         <Grid container alignItems={"center"}>
            <Grid item xs={6} className="imagemCadastro"></Grid>
            <Grid item xs={6} justifyContent="center">
               <Box display="flex" justifyContent={"center"}>
                  <Grid item xs={8}>
                     <form onSubmit={onSubmit}>
                        <Typography
                           variant="h3"
                           align="center"
                           gutterBottom
                           fontWeight="bold"
                        >
                           Cadastrar
                        </Typography>
                        <TextField
                           variant="outlined"
                           name="nomeUsuario"
                           value={usuario.nomeUsuario}
                           onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              updateModel(event)
                           }
                           label="Nome completo"
                           margin="normal"
                           required
                           fullWidth
                        />
                        <TextField
                           variant="outlined"
                           name="usuario"
                           value={usuario.usuario}
                           onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              updateModel(event)
                           }
                           label="Usuário (endereço de e-mail)"
                           margin="normal"
                           required
                           type="email"
                           fullWidth
                        />
                        <TextField
                           variant="outlined"
                           name="fotoUsuario"
                           value={usuario.fotoUsuario}
                           onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              updateModel(event)
                           }
                           label="Foto (URL)"
                           margin="normal"
                           fullWidth
                        />
                        <TextField
                           type="password"
                           name="senhaUsuario"
                           value={usuario.senhaUsuario}
                           onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              updateModel(event)
                           }
                           variant="outlined"
                           label="Senha"
                           margin="normal"
                           fullWidth
                        />
                        <TextField
                           type="password"
                           name="confirmarSenha"
                           value={confirmarSenha}
                           onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              confirmarSenhaHandle(event)
                           }
                           variant="outlined"
                           label="Confirmar Senha"
                           margin="normal"
                           fullWidth
                        />
                        <Box
                           marginY={2}
                           display={"flex"}
                           justifyContent={"space-around"}
                           gap={4}
                        >
                           <Button
                              onClick={back}
                              size="large"
                              variant="contained"
                              color="error"
                              fullWidth
                           >
                              Cancelar
                           </Button>
                           <Button
                              type="submit"
                              size="large"
                              variant="contained"
                              fullWidth
                           >
                              Cadastrar
                           </Button>
                        </Box>
                     </form>
                  </Grid>
               </Box>
            </Grid>
         </Grid>
      </>
   );
};
