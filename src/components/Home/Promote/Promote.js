import React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h4 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '0.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};



const Promote = () => {

    return (
        <ThemeProvider theme={theme}>
            <Box component="section" sx={{ width: 2 / 4, mx: 'auto', my: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box component="div" sx={{ color: '#4a148c', fontSize: '25px', mr: 5 }}>
                        <i className="fas fa-code"></i>
                    </Box>
                    <Box component="div" sx={{ color: '#e91e63', mr: 5, fontSize: '25px' }}>
                        <i className="fas fa-heart"></i>
                    </Box>
                    <Box component="div" sx={{ color: '#4a148c', fontSize: '25px' }}>
                        <i className="far fa-star"></i>
                    </Box>
                </Box>
                <Box>
                    <Typography variant='h4' sx={{ color: '#4a148c', textAlign: 'center', fontWeight: 700, mt: 3, mb: 1 }}>
                        Better Landing for Your Startup
                    </Typography>
                    <Typography variant='body2' sx={{ color: '#757575', textAlign: 'center', lineHeight: 1.5 }}>
                        We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>

    );
};

export default Promote;