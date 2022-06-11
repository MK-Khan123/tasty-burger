import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const NavItems = () => {

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

    return (
        <Box sx={{ flexGrow: 1, justifyContent: 'end', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
            {/* HOME SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
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
                    sx={{ color: 'white', fontSize: '1.25rem', fontWeight: '400' }}
                    endIcon={<ExpandMoreRoundedIcon />}
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
                    <NavLink to='/about-testo' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseAbout}>
                            About Us
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/team' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseAbout}>
                            Meet the Team
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/faq' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseAbout}>
                            F.A.Q.s
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/terms-privacy' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseAbout}>
                            Terms and Privacy
                        </MenuItem>
                    </NavLink>
                </Menu>
            </Box>

            {/* OUR MENU SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
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
                    sx={{ color: 'white', fontSize: '1.25rem', fontWeight: '400' }}
                    endIcon={<ExpandMoreRoundedIcon />}
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
                    <NavLink to='/all-items' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseShop}>
                            All Items
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/product-details/6256ddd6f67917cc7f07f8cf' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseShop}>
                            Product Details
                        </MenuItem>
                    </NavLink>
                </Menu>
            </Box>

            {/* CONTACTS SECTION */}
            <Box sx={{ my: 3, pr: 3 }}>
                <Button
                    id="navigation-button3"
                    aria-controls={openContacts ? 'basic-menu3' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openContacts ? 'true' : undefined}
                    onClick={handleClickContacts}
                    sx={{ color: 'white', fontSize: '1.25rem', fontWeight: '400' }}
                    endIcon={<ExpandMoreRoundedIcon />}
                >
                    CONTACTS
                </Button>
                <Menu
                    id="basic-menu3"
                    anchorEl={anchorElContacts}
                    open={openContacts}
                    onClose={handleCloseContacts}
                    MenuListProps={{
                        'aria-labelledby': 'navigation-button3',
                    }}
                >
                    <NavLink to='/reserve-a-table' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseContacts}>
                            Reserve a Table
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/contact-us' className='navLink-custom-style'>
                        <MenuItem onClick={handleCloseContacts}>
                            Contact Us
                        </MenuItem>
                    </NavLink>
                </Menu>
            </Box>

            {/* ADMIN SECTION */}
            {/* <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='/admin' style={{ textDecoration: 'none', color: 'white' }}>
                    ADMIN
                </NavLink>
            </Box> */}
        </Box>
    );
};

export default NavItems;