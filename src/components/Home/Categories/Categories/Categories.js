import React from 'react';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CloudIcon from '@mui/icons-material/Cloud';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Category from '../Category/Category';
import bg from '../../../../images/category/ca1.png';
import bg2 from '../../../../images/category/ca2.png';
import bg3 from '../../../../images/category/ca3.png';
import bg4 from '../../../../images/category/ca4.png';
import MyContainer from '../../../../StyledComponent/MyContainer';
import { makeStyles } from '@mui/styles';

const Categories = () => {
    // phone container responsiveness
    const theme = useTheme();
    const useStyles = makeStyles({
        mobileContainer: {
            [theme.breakpoints.down('md')]: {
                margin: '0px 20px !important'
            }
        },
    });
    const { mobileContainer } = useStyles();
    // categories list
    const categories = [
        { id: 1, title: 'Backend', Icon: CodeOffIcon, background: bg },
        { id: 2, title: 'Frontend', background: bg2 },
        { id: 3, title: 'Marketing', background: bg3 },
        { id: 4, title: 'Server', Icon: CloudIcon, background: bg4 },
    ];
    return (
        // Category Section
        <Box component="section">
            <MyContainer className={mobileContainer}>
                <Box component="div" sx={{ my: 3 }}>
                    <Typography variant="h4" sx={{ color: '#4a148c', fontWeight: 600, textAlign: 'center', my: 3, fontFamily: 'inherit' }}>Categorías</Typography>
                    <Grid container rowSpacing={{ xs: 2, sm: 2, md: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {
                            categories.map(category => <Category
                                key={category.id}
                                category={category}
                            />)
                        }
                    </Grid>
                </Box>
            </MyContainer>
        </Box>
    );
};

export default Categories;