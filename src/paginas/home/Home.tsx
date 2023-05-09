import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import Logo from "./../../assets/img/Dropshipping-model-rafiki.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { Carrossel } from "../../components/carrossel/Carrossel";
import { ListaProduto } from "../../components/produtos/listaProduto/ListaProduto";

function Home() {
  const history = useNavigate();

  function produtos() {
    history("/produtos");
  }

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  useEffect(() => {
    if (token === "") {
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
      <Box>
        <Box justifyContent="center">
          <Carrossel />
        </Box>
        <h1 className="sub_titulo">Nossos produtos</h1>
      </Box>
      <ListaProduto />
    
    </>
  );
}

export default Home;
