import { ADD_POST } from '../actionTypes/actionTypes';

const initialState = {
    posts: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {

            };
        default:
            return state;

    }

}

export default postReducer