import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { NestedMenuItem } from 'mui-nested-menu';
import { NavLink } from 'react-router-dom';

const NavItemsSidebar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const openNav = Boolean(anchorElNav);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="Menu Bar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                anchorEl={anchorElNav}
                open={openNav}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' }
                }}
            >
                {/* HOME SECTION */}
                <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to='/home' className='navLink-custom-style'>
                        HOME
                    </NavLink>
                </MenuItem>

                {/* ABOUT SECTION */}
                <NestedMenuItem
                    sx={{ '& .MuiTypography-root': { fontFamily: 'Oswald, sans-serif' } }}
                    rightIcon={<ArrowDropDownRoundedIcon />}
                    label="ABOUT"
                    parentMenuOpen={openNav}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/about-testo' className='navLink-custom-style'>About Us</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/team' className='navLink-custom-style'>Meet the Team</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/faq' className='navLink-custom-style'>F.A.Q.s</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/terms-privacy' className='navLink-custom-style'>Terms and Privacy</NavLink>
                    </MenuItem>
                </NestedMenuItem>

                {/* OUR MENU SECTION */}
                <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to='/main-menu' className='navLink-custom-style'>
                        OUR MENU
                    </NavLink>
                </MenuItem>

                {/* SHOP SECTION */}
                <NestedMenuItem
                    sx={{ '& .MuiTypography-root': { fontFamily: 'Oswald, sans-serif' } }}
                    rightIcon={<ArrowDropDownRoundedIcon />}
                    label="SHOP"
                    parentMenuOpen={openNav}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/all-items' className='navLink-custom-style'>All Items</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/product-details/6256ddd6f67917cc7f07f8cf' className='navLink-custom-style'>Product Details</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/my-account' className='navLink-custom-style'>My Account</NavLink>
                    </MenuItem>
                </NestedMenuItem>

                {/* CONTACTS SECTION */}
                <NestedMenuItem
                    sx={{ '& .MuiTypography-root': { fontFamily: 'Oswald, sans-serif' } }}
                    rightIcon={<ArrowDropDownRoundedIcon />}
                    label="CONTACTS"
                    parentMenuOpen={openNav}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/reserve-a-table' className='navLink-custom-style'>Reserve a Table</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavLink to='/contact-us' className='navLink-custom-style'>Contact Us</NavLink>
                    </MenuItem>
                </NestedMenuItem>

                {/* ADMIN SECTION */}
                <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to='/admin' className='navLink-custom-style'>
                        ADMIN
                    </NavLink>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default NavItemsSidebar;