import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import useAuth from '../../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const UserSettings = () => {

    const { user, logout } = useAuth();
    const { displayName, photoURL } = user;

    console.log(user);

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ width: '2.5rem', height: '2.5rem' }} alt={displayName} src={photoURL} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink to='/profile' className='navLink-custom-style'>
                        <Typography sx={{ fontFamily: 'Oswald, sans-serif', textAlign: "center" }}>Profile</Typography>
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink to='/dashboard' className='navLink-custom-style'>
                        <Typography sx={{ fontFamily: 'Oswald, sans-serif', textAlign: "center" }}>Dashboard</Typography>
                    </NavLink>
                </MenuItem>
                {
                    displayName ? (<MenuItem onClick={handleCloseUserMenu}>
                        <Typography onClick={logout} sx={{ fontFamily: 'Oswald, sans-serif', textAlign: "center" }}>Logout</Typography>
                    </MenuItem>) :
                        (<MenuItem onClick={handleCloseUserMenu}>
                            <NavLink to='/my-account' className='navLink-custom-style'>Login</NavLink>
                        </MenuItem>)
                }
            </Menu>
        </Box>
    );
};

export default UserSettings;