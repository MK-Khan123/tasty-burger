import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const logo = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/logo_lipngj.png';

    const pages = [
        {
            id: 'PG01',
            title: 'HOME'
        },
        {
            id: 'PG02',
            title: 'ABOUT'
        },
        {
            id: 'PG03',
            title: 'OUR MENU'
        },
        {
            id: 'PG04',
            title: 'SHOP'

        },
        {
            id: 'PG05',
            title: 'CONTACTS'

        },
        {
            id: 'PG06',
            title: 'ADMIN'
        }
    ];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const [anchorElShop, setAnchorElShop] = useState(null);
    const [anchorElAbout, setAnchorElAbout] = useState(null);
    const [anchorElContacts, setAnchorElContacts] = useState(null);


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

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >   {/* This is where you start */}
                                {pages.map((page) => (
                                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, justifyContent: 'end', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>

                            {/* HOME SECTION */}
                            <Box sx={{ my: 3, pr: 3, fontSize: '20px' }}>
                                <NavLink to='/home' style={{ textDecoration: 'none', color: 'white' }}>
                                    HOME
                                </NavLink>
                            </Box>

                            {/* ABOUT SECTION */}
                            <Box sx={{ my: 3, pr: 3 }}>
                                <Button
                                    id="navigation-button1"
                                    aria-controls={openAbout ? 'basic-menu1' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openAbout ? 'true' : undefined}
                                    sx={{ color: 'white', fontSize: '20px' }}
                                    onClick={handleClickAbout}
                                >
                                    ABOUT
                                </Button>
                                <Menu
                                    id="basic-menu1"
                                    anchorEl={anchorElAbout}
                                    open={openAbout}
                                    onClose={handleCloseAbout}
                                    MenuListProps={{
                                        'aria-labelledby': 'navigation-button1',
                                    }}
                                >
                                    <MenuItem onClick={handleCloseAbout}>
                                        <NavLink to='/about-testo' style={{ textDecoration: 'none' }}>About Us</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseAbout}>
                                        <NavLink to='/team' style={{ textDecoration: 'none' }}>Meet the Team</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseAbout}>
                                        <NavLink to='/faq' style={{ textDecoration: 'none' }}>F.A.Q.s</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseAbout}>
                                        <NavLink to='/terms-privacy' style={{ textDecoration: 'none' }}>Terms and Privacy</NavLink>
                                    </MenuItem>
                                </Menu>
                            </Box>

                            {/* OUR MENU SECTION */}
                            <Box sx={{ my: 3, pr: 3, fontSize: '20px' }}>
                                <NavLink to='/main-menu' style={{ textDecoration: 'none', color: 'white' }}>
                                    OUR MENU
                                </NavLink>
                            </Box>

                            {/* SHOP SECTION */}
                            <Box sx={{ my: 3, pr: 3 }}>
                                <Button
                                    id="navigation-button2"
                                    aria-controls={openShop ? 'basic-menu2' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openShop ? 'true' : undefined}
                                    onClick={handleClickShop}
                                    sx={{ color: 'white', fontSize: '20px' }}
                                >
                                    SHOP
                                </Button>
                                <Menu
                                    id="basic-menu2"
                                    anchorEl={anchorElShop}
                                    open={openShop}
                                    onClose={handleCloseShop}
                                    MenuListProps={{
                                        'aria-labelledby': 'navigation-button2',
                                    }}
                                >
                                    <MenuItem onClick={handleCloseShop}>
                                        <NavLink to='/all-items' style={{ textDecoration: 'none' }}>All Items</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseShop}>
                                        <NavLink to='/product-details/6256ddd6f67917cc7f07f8cf' style={{ textDecoration: 'none' }}>Product Details</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseShop}>
                                        <NavLink to='/my-account' style={{ textDecoration: 'none' }}>My Account</NavLink>
                                    </MenuItem>
                                </Menu>
                            </Box>

                            {/* CONTACTS SECTION */}
                            <Box sx={{ my: 3, pr: 3 }}>
                                <Button
                                    id="navigation-button5"
                                    aria-controls={openContacts ? 'basic-menu5' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openContacts ? 'true' : undefined}
                                    onClick={handleClickContacts}
                                    sx={{ color: 'white', fontSize: '20px' }}
                                >
                                    CONTACTS
                                </Button>
                                <Menu
                                    id="basic-menu5"
                                    anchorEl={anchorElContacts}
                                    open={openContacts}
                                    onClose={handleCloseContacts}
                                    MenuListProps={{
                                        'aria-labelledby': 'navigation-button5',
                                    }}
                                >
                                    <MenuItem onClick={handleCloseContacts}>
                                        <NavLink to='/reserve-a-table' style={{ textDecoration: 'none' }}>Reserve a Table</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseContacts}>
                                        <NavLink to='/contact-us' style={{ textDecoration: 'none' }}>Contact Us</NavLink>
                                    </MenuItem>
                                </Menu>
                            </Box>

                            {/* ADMIN SECTION */}
                            <Box sx={{ my: 3, pr: 3, fontSize: '20px' }}>
                                <NavLink to='/admin' style={{ textDecoration: 'none', color: 'white' }}>
                                    ADMIN
                                </NavLink>
                            </Box>
                        </Box>

                        {/* --------------------------------------------------------------------------------------------- */}

                        {/* THESE ARE USER SETTINGS OPTIONS */}

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
};

export default Navbar;