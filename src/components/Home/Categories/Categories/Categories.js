import React from 'react';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CloudIcon from '@mui/icons-material/Cloud';
import { Box, Container, Grid, Typography } from '@mui/material';
import Category from '../Category/Category';
import bg from '../../../../images/category/ca1.png';
import bg2 from '../../../../images/category/ca2.png';
import bg3 from '../../../../images/category/ca3.png';
import bg4 from '../../../../images/category/ca4.png';

const Categories = () => {
    const categories = [
        { id: 1, title: 'Backend', Icon: CodeOffIcon, background: bg },
        { id: 2, title: 'Frontend', background: bg2 },
        { id: 3, title: 'Marketing', background: bg3 },
        { id: 4, title: 'Server', Icon: CloudIcon, background: bg4 },
    ]
    return (
        // Category Section
        <Box component="section">
            <Container>
                <Typography variant="h4" sx={{ color: '#4a148c', fontWeight: 600, textAlign: 'center' }}>Category</Typography>
                <Box component="div" sx={{ my: 3 }}>
                    <Grid container spacing={2}>
                        {
                            categories.map(category => <Category
                                key={category.id}
                                category={category}
                            />)
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Categories;