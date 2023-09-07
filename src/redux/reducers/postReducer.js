import { ADD_POST, LOAD_POST } from '../actionTypes/actionTypes';

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
        case ADD_POST:
            return {

            };
        default:
            return state;

    }

}

export default postReducer