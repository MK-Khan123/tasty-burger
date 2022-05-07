import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import './Intro.css';

const Intro = () => {

    const introPic = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-01-img_gvpwo7.png';
    const introAd1 = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/introAd-1_uspstl.jpg';
    const introAd2 = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/introAd-2_ie6adw.jpg';


    const icons = {
        burger: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/icons/burger_qgfla1.png`,
        fries: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/french-fries_qourda.png`,
        chicken: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/chicken-leg_otuxya.png`,
        salad: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/salad_svw3qy.png`
    };

    return (
        <section id='intro'>
            <Container>
                <Grid container columnSpacing={8}>
                    <Grid item md={6}>
                        <img className='image-responsive' src={introPic} alt="" />
                    </Grid>
                    <Grid item md={6} py={8} className="intro-font">
                        <h5>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum in assumenda, aut accusamus voluptates, totam doloribus debitis distinctio.</p>
                        <Grid container className="mt-5">
                            <Grid item md={3} xs={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <img className='intro-icon-size' src={icons.burger} alt="" />
                                    <p className='intro-icon-font'>BURGERS</p>
                                </Box>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <img className='intro-icon-size' src={icons.fries} alt="" />
                                    <p className='intro-icon-font'>FRIES</p>
                                </Box>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <img className='intro-icon-size' src={icons.chicken} alt="" />
                                    <p className='intro-icon-font'>CHICKEN</p>
                                </Box>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <img className='intro-icon-size' src={icons.salad} alt="" />
                                    <p className='intro-icon-font'>SALADS</p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container pt={4} rowSpacing={2} justifyContent='space-evenly'>
                    <Grid item md={5}>
                        <Box sx={{ position: 'relative', maxWidth: '700px' }}>
                            <img style={{ borderRadius: '7px' }} className='image-responsive' src={introAd1} alt="" />
                            <div className='text-inside-image'>
                                <p>GET YOUR FREE</p>
                                <Box component='p' sx={{ fontWeight: 'bold' }}>CHEESE FRIES</Box>
                                <Button sx={{ fontFamily: 'Oswald, sans-serif' }} size='large' variant='contained' color='error'>LEARN MORE</Button>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ position: 'relative', maxWidth: '700px' }}>
                            <img style={{ borderRadius: '7px' }} className='image-responsive' src={introAd2} alt="" />
                            <div className='text-inside-image'>
                                <p>CRISPY CHICKEN</p>
                                <Box component='p' sx={{ fontWeight: 'bold' }}>BURGER IS BACK</Box>
                                <Button sx={{ fontFamily: 'Oswald, sans-serif' }} size='large' variant='contained' color='error'>LEARN MORE</Button>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Intro;