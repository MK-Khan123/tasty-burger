import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import './ProductHighlight.css';

const ProductHighlight = () => {

    const images = {
        bigtiBurger: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/all-food-items/burgers/bigti-burger_uhacul.png',
        holmBurger: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/burgers/holm-burger_zlgtmd.png',
        komilBurger: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/all-food-items/burgers/komil-burger_kzqaqv.png',
        background: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/promo-11_fmfjvg.jpg'
    };

    return (
        <section id='product-highlight' style={{ backgroundImage: `url(${images.background})`, maxWidth: '100vw' }}>
            <Container>
                <Grid container spacing={4} sx={{ padding: '4rem' }}>
                    <Grid item md={5} className="product-highlight-font">
                        <Box sx={{ fontSize: '2.85rem', fontWeight: '500' }}>THE</Box>
                        <Box sx={{ fontSize: '5.5rem', fontWeight: '500' }}>BIGTI</Box>
                        <Box sx={{ fontSize: '5.5rem', fontWeight: '500' }}>BURGER</Box>
                        <Box
                            component='p'
                            sx={{
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '1.1rem',
                                fontWeight: '300',
                                color: 'black'
                            }}
                        >
                            Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula rutrum risus ultrice luctus ligula congue a
                        </Box>
                        <Button
                            sx={{ fontFamily: 'Oswald, sans-serif' }}
                            size='large'
                            variant='contained'
                            color='error'
                        >
                            ADD TO CART
                        </Button>
                    </Grid>
                    <Grid item md={7}>
                        <img style={{ minWidth: '300px' }} className='image-responsive' src={images.bigtiBurger} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default ProductHighlight;


