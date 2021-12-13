import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import listIcon from '../../../images/icon/fa-angellist.png';

const Productive = () => {
    const theme = useTheme();
    const useStyles = makeStyles({
        singUpBtn: {
            [theme.breakpoints.down('md')]: {
                justifyContent: 'center !important',
                marginTop: '-10px !important'
            }
        },
    });
    const { singUpBtn } = useStyles();

    return (
        <Box component="section">
            <Container>
                <Grid container spacing={2} sx={{ mx: 'auto', alignItems: 'center', py: 6 }}>
                    <Grid item xs={12} sm={12} md={6}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Box sx={{ background: '#4a148c', py: 1.5, px: 2.5, borderRadius: 2, mr: 2 }}>
                            <img src={listIcon} alt="" />
                        </Box>
                        <Box>
                            <Typography variant="h5">
                                Be more productive
                            </Typography>
                            <Typography variant="body2">
                                Lookback is free to try for 14 days
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item className={singUpBtn} xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', }}>
                        <Button variant="outlined">
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Productive;