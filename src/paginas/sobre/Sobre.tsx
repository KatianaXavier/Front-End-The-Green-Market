import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import "./Sobre.css";
import { Box } from "@mui/material";

function Sobre() {
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
                            Sobre
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img 
                    src="https://i.imgur.com/m3TQNxB.png"
                    alt="Planeta Terra"
                    />
                </Grid>
                <Grid xs={12}></Grid>
            </Grid>
        </>
    );
}

export default Sobre;