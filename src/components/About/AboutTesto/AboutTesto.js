import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Subscription from '../../Shared/Subscription/Subscription';
import AboutIntro from './AboutIntro/AboutIntro';
import AboutPromo1 from './AboutPromo1/AboutPromo1';
import AboutPromo2 from './AboutPromo2/AboutPromo2';
import { Box, Container } from '@mui/material';

const AboutTesto = () => {
    document.title = 'Testo Burger | About';

    const bannerImage = `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786130/testo-burger-project/about-testo/about-page_m8n0cp.jpg`;

    return (
        <section id='about-testo'>
            <header>
                <Container>
                    <Navbar />
                </Container>
            </header>

            <main>
                <Box sx={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '26rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white', fontWeight: '500' }} component='h5'>ABOUT TESTO</Box>
                </Box>
                <AboutIntro />
                <AboutPromo1 />
                <AboutPromo2 />
                <Subscription />
            </main>

            <footer>
                <Footer />
            </footer>
        </section >
    );
};

export default AboutTesto;