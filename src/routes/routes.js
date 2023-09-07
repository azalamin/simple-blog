import Dashboard from '../layout/Dashboard/Dashboard';
import Main from '../layout/Main/Main';
import AddPost from '../pages/Dashboard/AddPost';
import PostList from '../pages/Dashboard/PostList';

const { createBrowserRouter } = require('react-router-dom');
const { default: Home } = require('../pages/Main/Home');

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <PostList />
            },
            {
                path: '/dashboard/add-post',
                element: <AddPost />
            }
        ]
    }
])

export default routes