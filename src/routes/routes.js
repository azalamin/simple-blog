import Main from '../layout/Main/Main';

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
    }
])

export default routes