import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deletePost from '../../redux/thunk/deletePost';
import loadPostData from '../../redux/thunk/fetchPosts';

const PostList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPostData())
    }, [dispatch])

    const posts = useSelector(state => state.post.posts)

    return (
        <Box marginY={5} marginX={2}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 850 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{
                                fontWeight: 'bold'
                            }}>Title</TableCell>
                            <TableCell align="right" sx={{
                                fontWeight: 'bold'
                            }}>Author</TableCell>
                            <TableCell align="right" sx={{
                                fontWeight: 'bold'
                            }}>Description</TableCell>
                            <TableCell align="right" sx={{
                                fontWeight: 'bold'
                            }}>Image</TableCell>
                            <TableCell align="right" sx={{
                                fontWeight: 'bold'
                            }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            posts.map(post => <>
                                <TableRow
                                    key={post._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {`${post?.title?.slice(0, 25)}...`}
                                    </TableCell>
                                    <TableCell align="right">{post.author}</TableCell>
                                    <TableCell align="right"> {`${post?.description?.slice(0, 20)}...`}</TableCell>
                                    <TableCell align="right">
                                        <a href={post.image} target="_blank" rel="noopener noreferrer">{`${post?.image?.slice(0, 12)}...`}
                                        </a>
                                    </TableCell>
                                    <TableCell align="right">
                                        <DeleteIcon onClick={() => dispatch(deletePost(post._id))} className='deleteIcon' sx={{
                                            cursor: 'pointer',

                                        }} />
                                    </TableCell>
                                </TableRow></>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default PostList;







