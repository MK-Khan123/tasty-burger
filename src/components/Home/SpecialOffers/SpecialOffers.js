import { Container, Grid } from '@mui/material';
import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
    const images = {
        offer1: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/offer-1_ewswo3.jpg',
        offer2: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/offer-2_cs3kni.jpg',
        offer3: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/offer-3_n6zq43.jpg',
        offer4: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/offer-4_zydwtx.jpg'
    };

    return (
        <section id='special-offers'>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <img style={{borderRadius: '8px'}} className='image-responsive' src={images.offer1} alt="" />
                    </Grid>
                    <Grid item md={6}>
                        <img style={{borderRadius: '8px'}} className='image-responsive' src={images.offer2} alt="" />
                    </Grid>
                    <Grid item md={6}>
                        <img style={{borderRadius: '8px'}} className='image-responsive' src={images.offer3} alt="" />
                    </Grid>
                    <Grid item md={6}>
                        <img style={{borderRadius: '8px'}} className='image-responsive' src={images.offer4} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default SpecialOffers;