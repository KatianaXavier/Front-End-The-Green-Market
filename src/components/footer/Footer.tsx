import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import { GitHub } from "@mui/icons-material";

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
              paddingTop: "30px",
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://github.com/ProjetoTheGreenMarket"
                target="_blank"
              >
                <GitHub style={{ fontSize: 40, color: "inherit" }} />
              </a>
            </Box>
          </Box>
          <Box
            style={{
              backgroundColor: "#f4f0e2",
              height: "",
              paddingBottom: "30px",
            }}
          >
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
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
