import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Avatar, Box } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../../assets/img/The_Green-Final.png";
import { useSelector, useDispatch } from "react-redux";
import { TokenState } from '../../store/tokens/tokensReducer';
import { addToken } from "../../store/tokens/action";
import { User } from "../../models/User";
import { getById } from '../../services/Services';

function Navbar() {
  const dispatch = useDispatch();

  const history = useNavigate();

  const back = () => {
    dispatch(addToken(""));
    history("/login");
  };
  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  const [usuario, setUsuario] = useState<User>({
    idUsuario: +userId,
    nomeUsuario: "",
    cpfUsuario: "",
    enderecoUsuario: "",
    telefoneUsuario: "",
    cepUsuario: "",
    usuario: '',
    fotoUsuario: '',
    senhaUsuario: '',
    produto: []
  })



  async function getUserById(id: number) {
    await getById(`/usuarios/${id}`, setUsuario, {
      Headers: {
        Authorization: token

      }
    })

  }


  useEffect(() => {
    getUserById(+userId)
  }, [])

  return (
    <>
      <AppBar
        className="header"
        position="static"
        style={{ backgroundColor: "#f4f0e2", color: "#2d5540" }}
      >
        <Toolbar variant="dense">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Link to={"/home"}>
              <Box style={{ cursor: "pointer" }}>
                <Typography variant="h5" color="inherit">
                  <img height={100} src={Logo} alt="" />
                </Typography>
              </Box>
            </Link>

            <Box display="flex" justifyContent="start">
              {token !== "" ? (
                <>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbarBorder'}
                    to="/home"
                    style={{ alignItems: "center", display: "flex" }}
                  >
                    <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                      <Typography variant="h6" color="inherit">
                        Home
                      </Typography>
                    </Box>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbarBorder'}
                    to="/categorias"
                    style={{ alignItems: "center", display: "flex" }}>
                    <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                      <Typography variant="h6" color="inherit">
                        Categorias
                      </Typography>
                    </Box>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbarBorder'}
                    to="/produtos"
                    style={{ alignItems: "center", display: "flex" }}>
                    <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                      <Typography variant="h6" color="inherit">
                        Produtos
                      </Typography>
                    </Box>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbarBorder'}
                    to="/sobre"
                    style={{ alignItems: "center", display: "flex" }}
                  >
                    <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                      <Typography variant="h6" color="inherit">
                        Sobre
                      </Typography>
                    </Box>
                  </NavLink>
                  <Box
                    onClick={back}
                    style={{ alignItems: "center", display: "flex" }}
                    className="linkNavbarBorder"
                  >
                    <Box
                      className="linkNavbar"
                      mx={1}
                      style={{ cursor: "pointer", alignItems: "center" }}
                    >
                      <Typography variant="h6" color="inherit">
                        Sair
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                  <Avatar src={usuario.fotoUsuario} style={{ width: '3rem', height: '3rem', marginTop: '20px'}} />
                  </Box>
                  
                </>
              ) : (
                <>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbarBorder'}
                    to="/sobre"
                    style={{ alignItems: "center", display: "flex" }}
                  >
                    <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                      <Typography variant="h6" color="inherit">
                        Sobre
                      </Typography>
                    </Box>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbarBorder'}
                    to="/login"
                    style={{ alignItems: "center", display: "flex" }}
                  >
                    <Box
                      className="linkNavbar"
                      mx={1}
                      style={{ cursor: "pointer", alignItems: "center" }}
                    >
                      <Typography variant="h6" color="inherit">
                        Login
                      </Typography>
                    </Box>
                  </NavLink>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
