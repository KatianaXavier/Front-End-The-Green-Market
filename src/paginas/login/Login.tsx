import React, { useState } from "react";
import "./Login.css";
import { Grid, Box, Typography, TextField } from "@mui/material";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Login() {

    const history = useNavigate()
    const [token, setToken] = useLocalStorage("token")
    const [userLogin, setUserLogin] = useState<UserLogin>({
    idUsuario: 0,
      nomeUsuario: "",
      cpfUsuario: "",
      enderecoUsuario: "",
      telefoneUsuario: "",
      cepUsuario: "",
      usuario: "",
      fotoUsuario: "",
      senhaUsuario: "",
      token: ""
    })


 return (
  <Grid container direction="row" justifyContent="center" alignItems="center">
   <Grid alignItems="center" xs={6}>
    <Box padding={20}>
     <form>
      <Typography
       variant="h3"
       gutterBottom
       color="textPrimary"
       component="h3"
       align="center"
       className="textos1"
      >
       Entrar
      </Typography>
      <TextField
       id="usuario"
       label="usuário"
       variant="outlined"
       name="usuario"
       margin="normal"
       fullWidth
      />
      <TextField
       id="senha"
       label="senha"
       variant="outlined"
       name="senha"
       margin="normal"
       type="password"
       fullWidth
      />
      <Box marginTop={2} textAlign="center">
       <Link to="/home">
        <Button type="submit" variant="contained" color="primary">
         Logar
        </Button>
       </Link>
      </Box>
     </form>
     <Box display="flex" justifyContent="center" marginTop={2}>
      <Box marginRight={2}>
       <Typography variant="subtitle1" gutterBottom align="center">
        Não tem uma conta?
       </Typography>
      </Box>

      <Link to="/cadastrarUsuario">
       <Typography
        variant="subtitle1"
        gutterBottom
        align="center"
        className="textos1"
       >
        Cadaste-se
       </Typography>
      </Link>
     </Box>
    </Box>
   </Grid>
   <Grid xs={6} className="imagem"></Grid>
  </Grid>
 );
}

export default Login;
