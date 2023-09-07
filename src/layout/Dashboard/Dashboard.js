import Box from '@mui/material/Box';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Outlet />
        </Box>
    );
}

export default Dashboard