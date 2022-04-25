import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './AboutTesto.css';
import Footer from '../../Shared/Footer/Footer';
import Subscription from '../../Shared/Subscription/Subscription';
import { Box, Button, Container, Grid } from '@mui/material';

const AboutTesto = () => {

    const images = {
        banner: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786130/testo-burger-project/about-testo/about-page_m8n0cp.jpg`,
        intro: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-01-img_gvpwo7.png`,
        about: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-testo/about-1_bv8egs.jpg`,
        frenchFry: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786130/testo-burger-project/about-testo/img-10_ehwptm.jpg`,
        burger: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-testo/img-15_vlhqcu.jpg`
    };

    const icons = {
        burger: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/icons/burger_qgfla1.png`,
        fries: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/french-fries_qourda.png`,
        chicken: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/chicken-leg_otuxya.png`,
        salad: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/salad_svw3qy.png`,
        dessert: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/dessert_fh3ber.png`,
        drink: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/cocktail_gfphhd.png`
    };

    return (
        <section id='about-testo'>
            <Container>
                <Navbar />
            </Container>

            <Box sx={{
                backgroundImage: `url(${images.banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '410px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{ fontSize: '4rem', color: 'white' }} component='h5'>ABOUT TESTO</Box>
            </Box>

            <main id='about-background-intro' className='container'>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <img src={images.intro} alt="" />
                        </Grid>
                        <Grid item md={6}>
                            <Box component='h5' sx={{
                                fontWeight: '600',
                                fontSize: '52px',
                                color: '#642F21',
                                lineHeight: '1.35'
                            }}>
                                NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER
                            </Box>
                            <Box component='p'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae.</Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        fontWeight: '600',
                                        fontSize: '18px',
                                        color: '#642F21',
                                        paddingTop: '10px'
                                    }}>
                                        Fringilla risus, luctus mau
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        fontWeight: '600',
                                        fontSize: '18px',
                                        color: '#642F21',
                                        paddingTop: '10px'
                                    }}>
                                        Quaerat sodales sapien</Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        fontWeight: '600',
                                        fontSize: '18px',
                                        color: '#642F21',
                                        paddingTop: '10px'
                                    }}>
                                        Quaerat sodales sapilti</Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        fontWeight: '600',
                                        fontSize: '18px',
                                        color: '#642F21',
                                        paddingTop: '10px'
                                    }}>
                                        Nemo ipsam egestas</Box>
                                </Grid>
                            </Grid>
                            <Button size='large' color='error' variant='contained' sx={{ marginTop: '2rem', fontFamily: 'Oswald, sans-serif' }}>ABOUT MORE</Button>
                        </Grid>
                    </Grid>
                </Container>
            </main>

            <Container id='about-background-promo' style={{ backgroundImage: `url(${images.about})`, maxWidth: '100vw', backgroundSize: '100% 100%', height: '600px' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <Box sx={{ fontWeight: '600', fontSize: '4.25rem', color: '#642F21' }} component='h5'>
                        <Box sx={{ color: '#f7be27' }} component='span'>BURGERS...</Box>WHAT ELSE?
                    </Box>
                    <Box sx={{
                        fontFamily: 'Roboto, sans-serif',
                        lineHeight: '1.5',
                        fontWeight: '400',
                        fontSize: '1.2rem',
                        padding: '2% 20%',
                        textAlign: 'center'
                    }} component='p'>
                        Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus mollislorem primis in integer metus curae integer orci congue integer and primis in integer metus mollis
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'evenly',
                        alignItems: 'center',
                        padding: '0 15%',
                    }}>
                        <img className='food-icon-size' src={icons.burger} alt="" />
                        <img className='food-icon-size' src={icons.fries} alt="" />
                        <img className='food-icon-size' src={icons.chicken} alt="" />
                        <img className='food-icon-size' src={icons.salad} alt="" />
                        <img className='food-icon-size' src={icons.dessert} alt="" />
                        <img className='food-icon-size' src={icons.drink} alt="" />
                    </Box>
                    <Button sx={{ maxWidth: '250px', fontFamily: 'Oswald, sans-serif', marginTop: '1rem' }} size='large' variant='contained' color='error'>EXPLORE FULL MENU</Button>
                </Box>
            </Container>

            <Container id='about-background-promo2'>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Box component='h5' sx={{
                            fontSize: '3.25rem',
                            letterSpacing: '1.2px',
                            color: '#642F21',
                            fontWeight: '600'
                        }}>
                            DISCOVER THE NEW TASTE OF THE BURGER
                        </Box>
                        <p>Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus mollislorem primis</p>
                        <img src={images.frenchFry} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={images.burger} alt="" />
                        <p>Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer.</p>
                    </Grid>
                </Grid>

                {/* <div className="row gx-5 gy-4">
                    <div className="col-md-6">
                        <h5 className='fw-bold'></h5>
                        <p></p>
                        <img className='rounded-3 img-fluid mt-4' src={images.frenchFry} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img className='rounded-3 img-fluid' src={images.burger} alt="" />
                        <p className='mt-3'></p>
                    </div>
                </div> */}
            </Container>

            <Subscription />
            <Footer />
        </section >
    );
};

export default AboutTesto;