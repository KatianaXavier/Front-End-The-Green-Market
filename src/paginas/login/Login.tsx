import React, { ChangeEvent, useState, useEffect } from "react";
import "./Login.css";
import { Grid, Box, Typography, TextField } from "@mui/material";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { UserLogin } from "../../models/UserLogin";
import { login } from "../../services/Services";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/action";
import { toast } from "react-toastify";

function Login() {
  const history = useNavigate();
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    token: "",
  });

  const dispatch = useDispatch();


  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    
    try {
      setIsLoading(true)
      await login("/usuarios/logar", userLogin, setToken);
      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      setIsLoading(false)
      toast.error("Usuário ou senha inválidos.", {
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
  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);



  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingRight={10}
    >
      <Grid alignItems="center" xs={6}>
        <Box padding={20}>
          <form onSubmit={onSubmit}>
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
              value={userLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senhaUsuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              id="senha"
              label="senha"
              variant="outlined"
              name="senhaUsuario"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button
                disabled ={isLoading}
                type="submit"
                variant="contained"
                style={{ background: "#2d5540", color: "#fff" }}
              >
                  {isLoading?(
                  <span className="Loader">Carregando</span>   
                ):"Logar"}

              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={2}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?{" "}
                <Link
                  style={{ color: "#2d5540ff", textDecoration: "underline" }}
                  to="/cadastro"
                >
                  Cadastre-se
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;
