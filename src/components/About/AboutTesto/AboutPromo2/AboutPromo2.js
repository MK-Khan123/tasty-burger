import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import './AboutPromo2.css';

const AboutPromo2 = () => {

    const frenchFryPic = `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786130/testo-burger-project/about-testo/img-10_ehwptm.jpg`;
    const burgerPic = `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-testo/img-15_vlhqcu.jpg`;

    return (
        <section id='about-promo2'>
            <Container>
                <Grid container pt={12} columnSpacing={4} rowSpacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component='h5'
                            sx={{
                                fontSize: '3.25rem',
                                lineHeight: '1.2',
                                color: '#642F21',
                                fontWeight: '500',
                                margin: 0
                            }}
                        >
                            DISCOVER THE NEW TASTE OF THE BURGER
                        </Box>
                        <p>Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus mollislorem primis</p>
                        <img style={{ borderRadius: '5px' }} className='image-responsive' src={frenchFryPic} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ borderRadius: '5px' }} className='image-responsive' src={burgerPic} alt="" />
                        <p>Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer.</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default AboutPromo2;