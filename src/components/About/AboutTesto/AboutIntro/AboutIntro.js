import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import './AboutIntro.css';

const AboutIntro = () => {

    const introImage = `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-01-img_gvpwo7.png`;

    return (
        <section id='about-intro'>
            <Container>
                <Grid container py={9} columnSpacing={8}>
                    <Grid item md={6}>
                        <img className='image-responsive' src={introImage} alt="" />
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                            <Box>
                                <Box
                                    component='h5'
                                    sx={{
                                        fontWeight: '500',
                                        fontSize: '3.25rem',
                                        color: '#642F21',
                                        lineHeight: '1.35'
                                    }}>
                                    NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER
                                </Box>
                                <Box
                                    component='p'
                                    sx={{
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '1rem',
                                        fontWeight: '300',
                                        paddingTop: '0.8rem'
                                    }}
                                >
                                    Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae.
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Box className='intro-list' component='li'>Fringilla risus, luctus mau</Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box className='intro-list' component='li'>Quaerat sodales sapien</Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box className='intro-list' component='li'>Quaerat sodales sapilti</Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box className='intro-list' component='li'>Nemo ipsam egestas</Box>
                                    </Grid>
                                </Grid>
                                <Button
                                    size='large'
                                    color='error'
                                    variant='contained'
                                    sx={{ marginTop: '2rem', fontFamily: 'Oswald, sans-serif', fontSize: '1rem' }}
                                >
                                    ABOUT MORE
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default AboutIntro;