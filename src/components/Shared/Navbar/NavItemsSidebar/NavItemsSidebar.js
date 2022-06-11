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
                <NavLink to='/home' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        HOME
                    </MenuItem>
                </NavLink>

                {/* ABOUT SECTION */}
                <NestedMenuItem
                    sx={{ '& .MuiTypography-root': { fontFamily: 'Oswald, sans-serif' } }}
                    rightIcon={<ArrowDropDownRoundedIcon />}
                    label="ABOUT"
                    parentMenuOpen={openNav}
                >
                    <NavLink to='/about-testo' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            About Us
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/team' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            Meet the Team
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/faq' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            F.A.Q.s
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/terms-privacy' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            Terms and Privacy
                        </MenuItem>
                    </NavLink>
                </NestedMenuItem>

                {/* OUR MENU SECTION */}
                <NavLink to='/main-menu' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        OUR MENU
                    </MenuItem>
                </NavLink>

                {/* SHOP SECTION */}
                <NestedMenuItem
                    sx={{ '& .MuiTypography-root': { fontFamily: 'Oswald, sans-serif' } }}
                    rightIcon={<ArrowDropDownRoundedIcon />}
                    label="SHOP"
                    parentMenuOpen={openNav}
                >
                    <NavLink to='/all-items' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            All Items
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/product-details/6256ddd6f67917cc7f07f8cf' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            Product Details
                        </MenuItem>
                    </NavLink>                    
                </NestedMenuItem>

                {/* CONTACTS SECTION */}
                <NestedMenuItem
                    sx={{ '& .MuiTypography-root': { fontFamily: 'Oswald, sans-serif' } }}
                    rightIcon={<ArrowDropDownRoundedIcon />}
                    label="CONTACTS"
                    parentMenuOpen={openNav}
                >
                    <NavLink to='/reserve-a-table' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            Reserve a Table
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/contact-us' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            Contact Us
                        </MenuItem>
                    </NavLink>
                </NestedMenuItem>

                {/* ADMIN SECTION */}
                {/* <NavLink to='/admin' className='navLink-custom-style'>
                <MenuItem onClick={handleCloseNavMenu}>                    
                        ADMIN                    
                </MenuItem>
                </NavLink> */}
            </Menu>
        </Box>
    );
};

export default NavItemsSidebar;