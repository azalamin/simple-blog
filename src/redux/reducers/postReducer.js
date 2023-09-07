import { DELETE_POST, LOAD_POST } from '../actionTypes/actionTypes';

const initialState = {
    posts: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POST:
            return {
                ...state,
                posts: action.payload,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            };
        default:
            return state;
    }
}

export default postReducer