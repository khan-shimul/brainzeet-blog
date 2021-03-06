import { Box, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import RegularButton from '../../../StyledComponent/RegularButton';
import Header from '../Header/Header';
import './Banner.css';
import bannerBg from '../../../images/banner/banner.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h1 = {
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4.2rem',
    },
};


const Banner = () => {
    // Custom Styles
    const useStyles = makeStyles({
        banner: {
            background: `linear-gradient(359.72deg, rgba(72, 43, 231, 0.73) 0.25%, rgba(0, 0, 0, 0.23) 99.77%), url(${bannerBg})`,
            height: '780px',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    });

    const { banner } = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Box component="section" className={banner}>
                <Container>
                    <Header />
                    <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh">
                        <Grid item xs={11} sm={11} md={8}>
                            <Typography variant="h1" sx={{ lineHeight: 1.2, color: '#fff', fontWeight: 700, mb: 2, mt: -5 }}>
                                Startup <br /> Framework.
                                Suit <br /> Up Your Startup
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'inherit', lineHeight: 1.5 }}>
                                We have created a new product that will help designers, <br /> developers and companies create websites for their startups <br /> quickly and easily.
                            </Typography>
                            <Box component="div" sx={{ mt: 5 }}>
                                <RegularButton sx={{ color: '#4a148c', mr: 3, mb: 2, fontFamily: 'inherit' }} >Get Started</RegularButton>
                                <RegularButton sx={{ background: 'transparent', color: '#fff', border: 1, fontFamily: 'inherit' }} >Learn More</RegularButton>
                            </Box>
                        </Grid>
                        <Grid item xs={0} sm={0} md={4}>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Banner;