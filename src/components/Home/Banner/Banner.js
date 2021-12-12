import { Box, Container, createTheme, Grid, Typography } from '@mui/material';
import React from 'react';
import RegularButton from '../../../StyledComponent/RegularButton';
import Header from '../Header/Header';
import './Banner.css';

const Banner = () => {
    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '0.7rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5.25rem',
        },
    };
    return (
        <Box component="section" className="banner">
            <Container>
                <Header />
                <Grid
                    container
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh">
                    <Grid item xs={12} md={8}>
                        <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
                            Startup <br /> Framework.
                            Suit <br /> Up Your Startup
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#fff' }}>
                            We have created a new product that will help designers, <br /> developers and companies create websites for their startups <br /> quickly and easily.
                        </Typography>
                        <Box sx={{ mt: 5 }}>
                            <RegularButton sx={{ background: '#fff', color: '#4a148c', mr: 2 }} >Learn More</RegularButton>
                            <RegularButton sx={{ background: 'transparent', color: '#fff' }} >Learn More</RegularButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;