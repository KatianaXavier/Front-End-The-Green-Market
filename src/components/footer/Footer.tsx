import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Avatar, Box } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LinkThreeLogo from '../../assets/img/linktree-logo-icon.svg'
import './Footer.css'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box
            style={{
              backgroundColor: "#f4f0e2",
              height: "",
              color: "#2d5540",
              paddingTop: "15px",
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://github.com/ProjetoTheGreenMarket"
                target="_blank"
              >
                <GitHub style={{ fontSize: 28, color: "inherit" }} />
              </a>
              <a
                style={{color: '#2d5540' }}
                href='https://linktr.ee/ProjetoTheGreenMarket'
                target="_blank"
              >
              <img
                alt="Logo Linktree"
                src={LinkThreeLogo}
                style={{ width: 28, height: 28, marginLeft: 8, marginBottom: 4, color: '#2d5540' }}
              />
              </a>
            </Box>
          </Box>
          <Box
            style={{
              backgroundColor: "#f4f0e2",
              height: "",
              paddingBottom: "12px",
            }}
          >
            <Box paddingTop={0.2}>
              <Typography
                variant="subtitle2"
                align="center"
                style={{ color: "inherit" }}
              >
                © 2023 Copyright. The Green Market
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
