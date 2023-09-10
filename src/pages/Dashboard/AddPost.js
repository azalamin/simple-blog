import Textarea from '@mui/joy/Textarea';
import { Box, FormControl, FormControlLabel, FormLabel, Input, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addPostServer from '../../redux/thunk/addPostServer';

const AddPost = () => {
    const [text, setText] = useState('');
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(addPostServer(data))
        reset()
        setText('')
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh' width='100%'>
            <Box width='40%' bgcolor='#f2f2f2' padding={5} borderRadius='3%'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box >
                        <Box>
                            <FormLabel htmlFor='title'>Title</FormLabel>
                        </Box>
                        <OutlinedInput {...register("title", { required: true })} sx={{
                            width: '100%',
                            height: '40px'
                        }} id='title' />
                    </Box>
                    <Box marginTop={1}>
                        <Box>
                            <FormLabel htmlFor='image'>Image Url</FormLabel>
                        </Box>
                        <OutlinedInput {...register("image", { required: true })} sx={{
                            width: '100%',
                            padding: '0px',
                            height: '40px'
                        }} id='image' />
                    </Box>
                    <Box marginTop={1}>
                        <Box>
                            <FormLabel htmlFor='author'>Author Name</FormLabel>
                        </Box>
                        <OutlinedInput {...register("author", { required: true })} sx={{
                            width: '100%',
                            height: '40px'
                        }} id='author' />
                    </Box>
                    <Box marginTop={1}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="true" control={<Radio {...register("status")} />} label="True" />
                                <FormControlLabel value="false" control={<Radio {...register("status")} />} label="False" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box marginTop={1}>
                        <Box>
                            <FormLabel htmlFor='author'>Description</FormLabel>
                        </Box>
                        <Textarea
                            {...register("description")}
                            placeholder="Type in here…"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                            minRows={4}
                            maxRows={7}
                            endDecorator={
                                <Typography level="body-xs" sx={{ ml: 'auto' }}>
                                    {text.length} character(s)
                                </Typography>
                            }
                            sx={{ minWidth: 100 }}
                        />
                    </Box>
                    <Box marginTop={2}>
                        <Input type='submit' sx={{
                            bgcolor: 'green',
                            color: 'white',
                            padding: '0.2rem 1rem',
                            border: '1px solid green',
                            ":hover": {
                                color: 'black',
                                background: '#2e7d327d',
                            }
                        }} variant='outlined' color='success'>Add Post</Input>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default AddPost;