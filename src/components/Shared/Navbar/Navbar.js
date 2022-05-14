import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import UserSettings from './UserSettings/UserSettings';
import NavItems from './NavItems/NavItems';
import NavItemsSidebar from './NavItemsSidebar/NavItemsSidebar';

const Navbar = () => {
    const logo = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/logo_lipngj.png';

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const [anchorElShop, setAnchorElShop] = useState(null);
    const [anchorElAbout, setAnchorElAbout] = useState(null);
    const [anchorElContacts, setAnchorElContacts] = useState(null);

    const openNav = Boolean(anchorElNav);
    const openAbout = Boolean(anchorElAbout);
    const openShop = Boolean(anchorElShop);
    const openContacts = Boolean(anchorElContacts);

    const handleClickAbout = (event) => {
        setAnchorElAbout(event.currentTarget);
    };

    const handleCloseAbout = () => {
        setAnchorElAbout(null);
    };

    const handleClickShop = (event) => {
        setAnchorElShop(event.currentTarget);
    };

    const handleCloseShop = () => {
        setAnchorElShop(null);
    };

    const handleClickContacts = (event) => {
        setAnchorElContacts(event.currentTarget);
    };

    const handleCloseContacts = () => {
        setAnchorElContacts(null);
    };

    const handleOpenNavMenu = (event) => {
        console.log(event.currentTarget);
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{
            position: 'relative',
            top: '1.2rem'
        }}>
            <AppBar
                sx={{
                    '& .MuiButton-text': {
                        fontFamily: 'Oswald, sans-serif'
                    }
                }}
                style={{
                    background: 'transparent',
                    boxShadow: 'none'
                }}
                position="absolute"
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img style={{ maxWidth: '120px', maxHeight: '100px' }} src={logo} alt="" />
                        </Typography>

                        {/* NAV ITEMS for smaller screen display (smaller than width of 900px) */}
                        <NavItemsSidebar
                            handleOpenNavMenu={handleOpenNavMenu}
                            handleCloseNavMenu={handleCloseNavMenu}
                            anchorElNav={anchorElNav}
                            openNav={openNav}
                        />

                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <NavLink to='/home' style={{ textDecoration: 'none' }}>
                                <img style={{ maxWidth: '120px', maxHeight: '100px' }} src={logo} alt="" />
                            </NavLink>
                        </Typography> */}

                        {/* NAV ITEMS for larger screen display (greater than width of 899px) */}
                        <NavItems
                            handleClickAbout={handleClickAbout}
                            handleCloseAbout={handleCloseAbout}
                            openAbout={openAbout}
                            anchorElAbout={anchorElAbout}
                            handleClickShop={handleClickShop}
                            handleCloseShop={handleCloseShop}
                            openShop={openShop}
                            anchorElShop={anchorElShop}
                            handleClickContacts={handleClickContacts}
                            handleCloseContacts={handleCloseContacts}
                            openContacts={openContacts}
                            anchorElContacts={anchorElContacts}
                        />

                        {/* CART ICON SECTION */}
                        <Box sx={{ my: 3, pr: 3 }}>
                            <NavLink to='/cart' style={{ textDecoration: 'none', color: 'white' }}>
                                <Badge badgeContent={4} color="error">
                                    <LocalMallRoundedIcon sx={{ fontSize: '1.5rem' }} />
                                </Badge>
                            </NavLink>
                        </Box>

                        {/* USER SETTINGS SECTION */}
                        <UserSettings
                            handleOpenUserMenu={handleOpenUserMenu}
                            handleCloseUserMenu={handleCloseUserMenu}
                            anchorElUser={anchorElUser}
                            settings={settings}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
};

export default Navbar;