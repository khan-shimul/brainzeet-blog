import { Box, CircularProgress, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import MyContainer from '../../../../StyledComponent/MyContainer';
import Post from '../Post/Post';

const Posts = () => {
    const [blogs, setBlogs] = useState([]);
    // load data from db
    useEffect(() => {
        fetch('https://safe-thicket-89541.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

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

    return (
        <Box component="section" sx={{ pb: 5 }}>
            <MyContainer className={mobileContainer}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 600, color: '#4a148c', my: 4 }}>Posts</Typography>
                <Box component="div">
                    {
                        blogs.length < 1 ? <CircularProgress sx={{ display: 'flex', mx: 'auto' }} /> :
                            <Grid container rowSpacing={{ xs: 2, sm: 2, md: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 7 }}>
                                {
                                    blogs.map(blog => <Post
                                        key={blog._id}
                                        blog={blog}
                                    />)
                                }
                            </Grid>
                    }

                </Box>
            </MyContainer>
        </Box>
    );
};

export default Posts;