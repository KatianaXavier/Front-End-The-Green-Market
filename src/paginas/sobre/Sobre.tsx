import React from "react";
import { Button, Container, Grid, Typography, makeStyles } from "@material-ui/core";
import "./Sobre.css";
import { Box } from "@mui/material";
import LogoHome from "./../../assets/img/The_Green2560_1600.png";
import { LinkedIn } from '@mui/icons-material';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({
  avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(8),
      boxShadow: '#836177 2px 2px 2px 2px',
  },
}));


function Sobre() {
  const classes = useStyles();

    const content = {
       
        '1_imag': 'https://avatars.githubusercontent.com/u/123902058?v=4',
        '1_name': 'Erica Araújo',
        '1_link': 'https://github.com/EricaArj',
        '1_linkLinkedIn': 'https://www.linkedin.com/in/ericaaraujojw/',

        '2_imag': 'https://avatars.githubusercontent.com/u/123902058?v=4',
        '2_name': 'Erica Araújo',
        '2_link': 'https://github.com/EricaArj',
        '2_linkLinkedIn': 'https://www.linkedin.com/in/ericaaraujojw/',

        '3_imag': 'https://avatars.githubusercontent.com/u/123902058?v=4',
        '3_name': 'Erica Araújo',
        '3_link': 'https://github.com/EricaArj',
        '3_linkLinkedIn': 'https://www.linkedin.com/in/ericaaraujojw/',

        '4_imag': 'https://avatars.githubusercontent.com/u/123902058?v=4',
        '4_name': 'Erica Araújo',
        '4_link': 'https://github.com/EricaArj',
        '4_linkLinkedIn': 'https://www.linkedin.com/in/ericaaraujojw/',

        '5_imag': 'https://avatars.githubusercontent.com/u/123902058?v=4',
        '5_name': 'Erica Araújo',
        '5_link': 'https://github.com/EricaArj',
        '5_linkLinkedIn': 'https://www.linkedin.com/in/ericaaraujojw/',

        '6_imag': 'https://avatars.githubusercontent.com/u/123902058?v=4',
        '6_name': 'Erica Araújo',
        '6_link': 'https://github.com/EricaArj',
        '6_linkLinkedIn': 'https://www.linkedin.com/in/ericaaraujojw/',

      


       


    };
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
      <Box><h2 className='titulo'>Equipe de desenvolvimento</h2></Box>
      
      <section >
            <Container maxWidth="lg">
                <Box pt={8} pb={11} textAlign="center">
                    <Box mb={10}>
                        <Container maxWidth="sm">
                            <Typography variant="overline" color="textSecondary" paragraph={true} style={{ color: '#0F2B1E' }}></Typography>
                            <Typography variant="h3" component="h2" gutterBottom={true}>
                                <Typography variant="h3" component="span" style={{ color: '#0F2B1E' }}></Typography>
                                <Typography variant="h3" component="span" style={{ color: '#0F2B1E' }}></Typography>
                            </Typography>
                        </Container>
                    </Box>
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={4} md={4}>
                            <Avatar alt="perfil" src={content['1_imag']} className={classes.avatar} style={{ marginBottom: '4vh' }} />
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{ color: '#0F2B1E' }}>{content['1_name']}</Typography>
                            <p>
                                <GitHubIcon
                                    onClick={() => window.open(content['1_link'], '_blank')}
                                />
                                <LinkedIn
                                    onClick={() => window.open(content['1_linkLinkedIn'], '_blank')}
                                />
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Avatar alt="perfil" src={content['2_imag']} className={classes.avatar} style={{ marginBottom: '4vh' }} />
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{ color: '#0F2B1E' }}>{content['2_name']}</Typography>
                            <p>
                                <GitHubIcon
                                    onClick={() => window.open(content['2_link'], '_blank')}
                                />
                                <LinkedIn
                                    onClick={() => window.open(content['2_linkLinkedIn'], '_blank')}
                                />
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Avatar alt="perfil" src={content['3_imag']} className={classes.avatar} style={{ marginBottom: '4vh' }} />
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{ color: '#0F2B1E' }}>{content['3_name']}</Typography>
                            <p>
                                <GitHubIcon
                                    onClick={() => window.open(content['3_link'], '_blank')}
                                />
                                <LinkedIn
                                    onClick={() => window.open(content['3_linkLinkedIn'], '_blank')}
                                />
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Avatar alt="perfil" src={content['4_imag']} className={classes.avatar} style={{ marginBottom: '4vh' }} />
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{ color: '#0F2B1E' }}>{content['4_name']}</Typography>
                            <p>
                                <GitHubIcon
                                    onClick={() => window.open(content['4_link'], '_blank')}
                                />
                                <LinkedIn
                                    onClick={() => window.open(content['4_linkLinkedIn'], '_blank')}
                                />
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Avatar alt="perfil" src={content['5_imag']} className={classes.avatar} style={{ marginBottom: '4vh' }} />
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{ color: '#0F2B1E' }}>{content['5_name']}</Typography>
                            <p>
                                <GitHubIcon
                                    onClick={() => window.open(content['5_link'], '_blank')}
                                />
                                <LinkedIn
                                    onClick={() => window.open(content['5_linkLinkedIn'], '_blank')}
                                />
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Avatar alt="perfil" src={content['6_imag']} className={classes.avatar} style={{ marginBottom: '4vh' }} />
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{ color: '#0F2B1E' }}>{content['6_name']}</Typography>
                            <p>
                                <GitHubIcon
                                    onClick={() => window.open(content['6_link'], '_blank')}
                                />
                                <LinkedIn
                                    onClick={() => window.open(content['6_linkLinkedIn'], '_blank')}
                                />
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    </>
  );
}

export default Sobre;
