import React from 'react';
import newsBg from '../../../images/get.png';
import Box from '@mui/material/Box';
import { Container, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const NewsLetter = () => {
    const theme = useTheme();
    theme.typography.h3 = {
        fontSize: '1.5rem',
        '@media (min-width:600px)': {
            fontSize: '0.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.6rem',
            lineHeight: '3.3rem'
        },
    };
    const useStyles = makeStyles({
        newsContainer: {
            background: `url(${newsBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '350px',
            display: 'flex',
            alignItems: 'center'
        },
        newsSubmit: {
            background: '#4A20FF',
            color: '#fff',
            border: 'none',
            padding: '15px 20px',
            cursor: 'pointer',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            fontFamily: 'inherit'

        },
        newsMail: {
            [theme.breakpoints.up('sm')]: {
                width: '500px',
                border: 'none',
                padding: '15px 12px',
                outline: 'none',
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
            },
            [theme.breakpoints.down('sm')]: {
                width: '200px',
                border: 'none',
                padding: '15px 7px',
                outline: 'none',

                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
            },
        }
    })
    const { newsContainer, newsSubmit, newsMail } = useStyles();
    return (
        <Box component="section" className={newsContainer}>
            <Container>
                <Box component="div">
                    <Typography variant="h3" sx={{ color: '#fff', fontWeight: 600, textAlign: 'center', mb: 3 }}>
                        Get the new technology for <br />later and read it at any time
                    </Typography>
                    <Box component="div"
                        sx={{ textAlign: 'center' }}>
                        <input className={newsMail} type="email" placeholder='Email' required />
                        <input className={newsSubmit} type="submit" value="Subscribe" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NewsLetter;