import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";

function Home() {
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
                        <Button variant="outlined">Ver produtos</Button>
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

export default Home;
