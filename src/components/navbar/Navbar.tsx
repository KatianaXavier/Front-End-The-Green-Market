import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../../assets/img/The_Green-Final.png";
import { useSelector, useDispatch } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { addToken } from "../../store/tokens/action";

function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const history = useNavigate();

  const back = () => {
    dispatch(addToken(""));
    history("/login");
  };
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
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbar'}
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
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbar'}
                    to="/categorias"
                    style={{ alignItems: "center", display: "flex" }}>
                    <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                      <Typography variant="h6" color="inherit">
                        Categorias
                      </Typography>
                    </Box>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbar'}
                    to="/produtos"
                    style={{ alignItems: "center", display: "flex" }}>
                    <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                      <Typography variant="h6" color="inherit">
                        Produtos
                      </Typography>
                    </Box>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbar'}
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
                  >
                    <Box
                      className="linkNavbar"
                      mx={1}
                      style={{ cursor: "pointer", alignItems: "center" }}
                    >
                      <Typography variant="h6" color="inherit">
                        Logout
                      </Typography>
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <NavLink
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbar'}
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
                    className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbar'}
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
