import { Box, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const Category = ({ category }) => {
    // destructure
    const { title, Icon, background } = category;
    // Custom Styles
    const useStyles = makeStyles({
        categoryContainer: {
            background: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: '190px',
            borderRadius: '16px !important',


        },
        content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '70px 40px 70px 40px',
        }
    });
    const { categoryContainer, content } = useStyles();

    return (
        <Grid item xs={12} sm={12} md={6}>
            <Paper
                elevation={0}
                className={categoryContainer}>
                <Box component="div" className={content}>
                    <Box>
                        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 600 }}>
                            {title}
                        </Typography>
                    </Box>
                    <Box>
                        {
                            Icon && <Icon sx={{ color: '#fff', fontSize: 50 }} />
                        }
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Category;