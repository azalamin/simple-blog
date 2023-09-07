import { loadPost } from '../actions/postAction';

const loadPostData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/posts');
        const data = await res.json();

        if (data.data.length) {
            dispatch(loadPost(data.data))
        }
    }

}

export default loadPostData;