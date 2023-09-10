import { addPost } from '../actions/postAction';

const addPostServer = (post) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(addPost())
        }
    }

}

export default addPostServer