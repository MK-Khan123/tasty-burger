import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const logo = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/logo_lipngj.png';

    return (
        <section id='footer'>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ maxWidth: '14.375rem' }} src={logo} alt="testo burger logo" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <FacebookIcon sx={{ color: '#4867AA', fontSize: '2.1875rem', margin: '15px' }} />
                    <TwitterIcon sx={{ color: '#179CF0', fontSize: '2.1875rem', margin: '15px' }} />
                    <PinterestIcon sx={{ color: '#BE0216', fontSize: '2.1875rem', margin: '15px' }} />
                    <WhatsAppIcon sx={{ color: '#24C761', fontSize: '2.1875rem', margin: '15px' }} />
                    <YouTubeIcon sx={{ color: '#F20000', fontSize: '2.1875rem', margin: '15px' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <NavLink to='' className='footer-nav-link'>ABOUT</NavLink>
                    <NavLink to='' className='footer-nav-link'>MENU</NavLink>
                    <NavLink to='' className='footer-nav-link'>ORDER NOW</NavLink>
                    <NavLink to='' className='footer-nav-link'>GALLERY</NavLink>
                    <NavLink to='' className='footer-nav-link'>LOCATIONS</NavLink>
                    <NavLink to='' className='footer-nav-link'>CONTACT</NavLink>
                </Box>
                <Box sx={{ textAlign: 'center' }}>{(new Date()).getFullYear()} Copyright © Testo. All Rights Reserved</Box>
            </Container>
        </section>
    );
};

export default Footer;