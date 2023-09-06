import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data.data))
    }, [])

    return (
        <Box marginX={10} marginTop={10} >
            <Grid container gap={2}>
                {posts.map(post => <Grid item md={3.8} justifyContent='center' >
                    <PostCard key={post._id} post={post} />
                </Grid>)}
            </Grid>
        </Box>
    );
};

export default Home;