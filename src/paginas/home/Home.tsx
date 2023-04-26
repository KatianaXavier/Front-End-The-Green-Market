import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import Logo from "./../../assets/img/Dropshipping-model-rafiki.svg";
import { useNavigate } from "react-router-dom";

function Home() {

  const history = useNavigate();

  function produtos(){
    history('/listaProdutos')
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
            >
              Bem vinde ao The Green Market!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
            >
              Sua loja verde!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              className="buttonHome"
              style={{ background: "#2d5540", color: "#fff" }}
              type="submit"
              size="large"
              variant="contained"
              onClick={produtos}
            >
              Ver produtos
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={Logo} alt="Planeta Terra" />
        </Grid>
        <Grid xs={12}></Grid>
      </Grid>
    </>
  );
}

export default Home;
