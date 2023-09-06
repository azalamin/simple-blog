import { ADD_POST } from '../actionTypes/actionTypes';

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
})
