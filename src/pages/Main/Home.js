import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../../components/PostCard';
import loadPostData from '../../redux/thunk/fetchPosts';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPostData())
    }, [dispatch])

    const posts = useSelector(state => state.post.posts)
    console.log(posts)


    return (
        <Box marginX={10} marginY={6} >
            <Typography variant='h5' color='green' marginBottom={1}>
                Latest Post
            </Typography>
            <Grid container gap={2}>
                {posts.map(post => <Grid item md={3.8} justifyContent='center' >
                    <PostCard key={post._id} post={post} />
                </Grid>)}
            </Grid>
        </Box>
    );
};

export default Home;