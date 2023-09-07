import { ADD_POST, LOAD_POST } from '../actionTypes/actionTypes';

export const loadPost = (data) => ({
    type: LOAD_POST,
    payload: data
})

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
});
