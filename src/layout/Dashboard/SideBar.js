import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../layout/Main/Main.css';

const drawerWidth = 240;

const SideBar = () => {
    return (
        <>
            <CssBaseline />

            <Drawer
                sx={{
                    position: 'relative',
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"

            >
                <Toolbar />
                <Divider />
                <List>
                    {['Post List', 'Add Post',].map((text, index) => (
                        <Link className='linkButton' key={text} to={`/dashboard/${text.includes('Add Post') ? 'add-post' : ''}`}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <FormatListBulletedIcon /> : <PostAddIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Box position='absolute' bottom={40} left={20}>
                    <Link style={{ fontWeight: 'bold' }} className='linkButton' to='/'>Back to Home</Link>
                </Box>
            </Drawer>
        </>
    );
};

export default SideBar;