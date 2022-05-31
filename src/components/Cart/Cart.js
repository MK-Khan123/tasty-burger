import Navbar from '../Shared/Navbar/Navbar';
import MobileApp from '../Shared/MobileApp/MobileApp';
import Footer from '../Shared/Footer/Footer';
import { Box, Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CartTable from './CartTable/CartTable';
import CartTotal from './CartTotal/CartTotal';
import useRedux from '../../hooks/useRedux';

const Cart = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/cart/cart-page_npf8up.jpg';

    const { cartItems, cartTotal, handleRemoveFromCart, handleAddQuantity, handleReduceQuantity } = useRedux();

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

                <Container>
                    {
                        (cartItems.length > 0) ?
                            <div>
                                <CartTable
                                    cartItems={cartItems}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                    handleAddQuantity={handleAddQuantity}
                                    handleReduceQuantity={handleReduceQuantity}
                                />
                                <CartTotal
                                    cartTotal={cartTotal}
                                />
                            </div> :

                            <Box marginTop='6.25rem'>
                                <Box
                                    sx={{
                                        backgroundColor: '#F7F6F7',
                                        padding: '1.2rem',
                                        borderRadius: '0 0 8px 8px',
                                        borderTop: '3px solid crimson',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <AddShoppingCartIcon sx={{ paddingX: '0.5rem' }} />
                                    <Typography variant="h6" gutterBottom component="div">
                                        Your cart is currently empty
                                    </Typography>
                                    <SentimentVeryDissatisfiedIcon sx={{ paddingX: '0.5rem' }} />
                                </Box>
                                <NavLink to='/main-menu' style={{ textDecoration: 'none' }}>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            backgroundImage: 'linear-gradient( 183.5deg,  rgba(244,173,6,1) 18.6%, rgba(229,251,31,1) 119.9% )',
                                            color: '#000',
                                            marginTop: '1.5rem'
                                        }}
                                    >
                                        Return to Menu <ShoppingBagIcon sx={{ paddingLeft: '5px', color: '#393e46' }} />
                                    </Button>
                                </NavLink>
                            </Box>
                    }
                </Container>

                <MobileApp />
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Cart;