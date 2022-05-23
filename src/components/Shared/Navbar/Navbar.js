import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserSettings from './UserSettings/UserSettings';
import NavItems from './NavItems/NavItems';
import NavItemsSidebar from './NavItemsSidebar/NavItemsSidebar';
import './Navbar.css';

const Navbar = () => {
    const logo = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/logo_lipngj.png';

    const cart = useSelector(state => state.entities.cart);

    return (
        <Box sx={{ position: 'relative' }}>
            <AppBar
                position="absolute"
                sx={{
                    background: 'transparent',
                    boxShadow: 'none'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <NavLink to='/home'>
                                <img style={{ maxWidth: '120px', maxHeight: '100px' }} src={logo} alt="" />
                            </NavLink>
                        </Typography>

                        {/* NAV ITEMS for smaller screen display (smaller than width of 900px) */}
                        <NavItemsSidebar />

                        {/* NAV ITEMS for larger screen display (greater than width of 899px) */}
                        <NavItems />

                        {/* CART ICON SECTION */}
                        <Box sx={{ my: 3, pr: 3 }}>
                            <NavLink to='/cart' style={{ textDecoration: 'none', color: 'white' }}>
                                <Badge badgeContent={cart.length} color="error">
                                    <LocalMallRoundedIcon sx={{ fontSize: '1.5rem' }} />
                                </Badge>
                            </NavLink>
                        </Box>

                        {/* USER SETTINGS SECTION */}
                        <UserSettings />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
};

export default Navbar;