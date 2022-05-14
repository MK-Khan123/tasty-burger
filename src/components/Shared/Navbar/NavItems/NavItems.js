import React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const NavItems = (props) => {

    const { handleClickAbout, handleCloseAbout, openAbout, anchorElAbout, handleClickShop, handleCloseShop, openShop, anchorElShop, handleClickContacts, handleCloseContacts, openContacts, anchorElContacts } = props;

    return (
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
    );
};

export default NavItems;