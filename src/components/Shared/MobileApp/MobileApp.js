import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import './MobileApp.css';

const MobileApp = () => {
    const images = {
        appStorePic: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/mobile-app/appstore_q0uml4.png',
        googlePlayPic: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/mobile-app/googleplay_wva2c8.png',
        eShopPic: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/mobile-app/e-shop_gagufy.png'
    };

    return (
        <section id='mobile-app'>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={6} mt={8}>
                        <Box
                            sx={{
                                fontSize: '2.375rem',
                                fontWeight: '400',
                                color: '#642F21'
                            }}
                        >
                            DOWNLOAD MOBILE APP AND
                        </Box>
                        <Box
                            sx={{
                                fontSize: '4.5rem',
                                fontWeight: '700',
                                color: '#642F21'
                            }}
                        >
                            SAVE UP TO 20%
                        </Box>
                        <Box
                            sx={{
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '1.1rem',
                                fontWeight: '300',
                                lineHeight: '1.5'
                            }}
                        >
                            Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius
                        </Box>
                        <Box sx={{ display: 'flex', paddingTop: '2rem' }}>
                            <Box sx={{ paddingRight: '20px' }}>
                                <img style={{ maxWidth: '150px' }} className='image-responsive' src={images.appStorePic} alt="App Store Pic" />
                            </Box>
                            <Box>
                                <img style={{ maxWidth: '150px' }} className='image-responsive' src={images.googlePlayPic} alt="Google Play Store Pic" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid mt={{ xs: 4, md: 0 }} item md={6}>
                        <img className='image-responsive' src={images.eShopPic} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default MobileApp;