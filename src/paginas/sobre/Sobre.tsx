import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import "./Sobre.css";
import { Box } from "@mui/material";
import LogoHome from "./../../assets/img/The_Green2560_1600.png";

function Sobre() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} paddingY={10}>
            <Typography
              variant="h6"
              gutterBottom
              color="textPrimary"
              component="p"
              align="justify"
            >
              Inspirado no Objetivo de Desenvolvimento Sustentável 13 da ONU, o
              The Green Market é um e-commerce de produtos sustentáveis,
              ecológicos e/ou recicláveis, cujo foco é a obtenção de renda para
              doação a organizações que promovem ações concretas de cuidados com
              o meio ambiente que contribuem com as redução das mudanças
              climáticas. The Green Market – Impactar o individual para impactar
              o todo
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              color="textPrimary"
              component="p"
              align="justify"
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              The Green Market – Impactar o individual para impactar o todo
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} style={{ padding: "30px 0 30px 0" }}>
          <img src={LogoHome} alt="Logo do home" />
        </Grid>
        <Grid xs={12}></Grid>
      </Grid>
    </>
  );
}

export default Sobre;
