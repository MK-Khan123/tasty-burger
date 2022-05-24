import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import fakeData from '../fakeData';
import MobileApp from '../Shared/MobileApp/MobileApp';
import Footer from '../Shared/Footer/Footer';
import { Box, Container } from '@mui/material';
import CartTable from './CartTable/CartTable';
import CartTotal from './CartTotal/CartTotal';

const Cart = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/cart/cart-page_npf8up.jpg';

    const productData = fakeData.slice(0, 2);
    return (
        <section id='cart'>
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
                    <Box sx={{ fontSize: '4rem', color: 'white', fontWeight: '500' }} component='h5'>SHOPPING CART</Box>
                </Box>

                <CartTable productData={productData} />

                <CartTotal />

                <MobileApp />
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Cart;