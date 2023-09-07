import { removePost } from '../actions/postAction';

const deletePost = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": 'application/json'
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(removePost(id))
        }
    }
}


export default deletePost