import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Promote = () => {
    return (
        <Box component="section" sx={{ my: 5 }}>
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
                <Typography variant='body2' sx={{ width: 2 / 4, color: '#757575', textAlign: 'center', mx: 'auto' }}>
                    We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                </Typography>
            </Box>
        </Box>
    );
};

export default Promote;