import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import './AboutPromo1.css';

const AboutPromo1 = () => {

    const aboutImage = `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-testo/about-1_bv8egs.jpg`;

    const icons = {
        burger: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/icons/burger_qgfla1.png`,
        fries: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/french-fries_qourda.png`,
        chicken: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/chicken-leg_otuxya.png`,
        salad: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/salad_svw3qy.png`,
        dessert: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/dessert_fh3ber.png`,
        drink: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/cocktail_gfphhd.png`
    };

    return (
        <section id='about-promo1'>
            <Container style={{ backgroundImage: `url(${aboutImage})`, maxWidth: '100vw', backgroundSize: '100% 100%', height: '37.5rem' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}
                >
                    <Box
                        component='h5'
                        sx={{
                            fontWeight: '500',
                            fontSize: { xs: '3rem', sm: '3.5rem', md: '4.25rem' },
                            color: '#642F21',
                            textAlign: 'center',
                            margin: 0
                        }}
                    >
                        <Box sx={{ color: '#f7be27' }} component='span'>BURGERS...</Box>WHAT ELSE?
                    </Box>
                    <Box
                        component='p'
                        sx={{
                            fontFamily: 'Roboto, sans-serif',
                            lineHeight: '1.5',
                            fontWeight: '300',
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                            paddingX: { sm: '10%', md: '20%' },
                            textAlign: 'center'
                        }}
                    >
                        Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus mollislorem primis in integer metus curae integer orci congue integer and primis in integer metus mollis
                    </Box>
                    <Grid container align="center" paddingX="15%">
                        <Grid item xs={4} md={2}><img className='food-icon-size' src={icons.burger} alt="burger icon" /></Grid>
                        <Grid item xs={4} md={2}><img className='food-icon-size' src={icons.fries} alt="fries icon" /></Grid>
                        <Grid item xs={4} md={2}><img className='food-icon-size' src={icons.chicken} alt="chicken icon" /></Grid>
                        <Grid item xs={4} md={2}><img className='food-icon-size' src={icons.salad} alt="salad icon" /></Grid>
                        <Grid item xs={4} md={2}><img className='food-icon-size' src={icons.dessert} alt="dessert icon" /></Grid>
                        <Grid item xs={4} md={2}><img className='food-icon-size' src={icons.drink} alt="cocktail icon" /></Grid>
                    </Grid>
                    <Button                    
                        sx={{
                            maxWidth: '15.625rem',
                            fontSize: '1.1rem',
                            marginTop: '1rem'
                        }}
                        size='large'
                        variant='contained'
                        color='error'
                    >
                        EXPLORE FULL MENU
                    </Button>
                </Box>
            </Container>
        </section>
    );
};

export default AboutPromo1;