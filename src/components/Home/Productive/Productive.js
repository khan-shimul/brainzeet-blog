import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import listIcon from '../../../images/icon/fa-angellist.png';
import MyContainer from '../../../StyledComponent/MyContainer';

const Productive = () => {
    const theme = useTheme();
    theme.typography.h5 = {
        fontSize: '1.5rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        },
    };
    const useStyles = makeStyles({
        singUpBtn: {
            background: '#fff !important',
            color: '#1E0E62 !important',
            border: '2px solid #EBEAED !important',
            borderRadius: '100px !important',
            padding: '17px 25px !important',
            fontWeight: '500 !important',

        },
        singUpBtnBox: {
            [theme.breakpoints.down('md')]: {
                justifyContent: 'center !important',
                marginTop: '-10px !important'
            }
        },
        mobileContainer: {
            [theme.breakpoints.down('md')]: {
                margin: '0px 20px !important'
            }
        },
    });
    const { singUpBtn, mobileContainer, singUpBtnBox } = useStyles();

    return (
        <Box component="section">
            <MyContainer className={mobileContainer}>
                <Grid container spacing={2} sx={{ mx: 'auto', alignItems: 'center', py: 6 }}>
                    <Grid item xs={12} sm={12} md={6}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Box sx={{ background: '#4a148c', py: 1.5, px: 2.5, borderRadius: 2, mr: 2 }}>
                            <img src={listIcon} alt="" />
                        </Box>
                        <Box>
                            <Typography variant="h5" sx={{ color: '#4a148c', fontWeight: 600 }}>
                                Be more productive
                            </Typography>
                            <Typography variant="body2">
                                Lookback is free to try for 14 days
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item className={singUpBtnBox} xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', }}>
                        <Box component="div" sx={{ pr: 3 }}>
                            <Button className={singUpBtn}>
                                Sign Up
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </MyContainer>
        </Box>
    );
};

export default Productive;