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
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#2D5540" }}>
        <Toolbar variant="dense">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Box style={{ cursor: "pointer" }}>
              <Typography variant="h5" color="inherit">
                The Green Market
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home">
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Sobre
                </Typography>
              </Box>

              <Link to="/login">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  Login
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
