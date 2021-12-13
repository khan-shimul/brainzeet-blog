import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://safe-thicket-89541.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <Box component="section" sx={{ pb: 5 }}>
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 600, color: '#4a148c', my: 4 }}>Posts</Typography>
                <Box component="div">
                    <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                        {
                            blogs.map(blog => <Post
                                key={blog._id}
                                blog={blog}
                            />)
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Posts;