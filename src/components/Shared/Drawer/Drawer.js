import { useState } from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import useRedux from '../../../hooks/useRedux';
import EmptyCart from './EmptyCart/EmptyCart';
import FilledCart from './FilledCart/FilledCart';
import Button from '@mui/material/Button';
import useCart from '../../../hooks/useCart';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import './Drawer.css';

const TemporaryDrawer = () => {

    const [drawer, setDrawer] = useState(false);

    const { cartItems } = useRedux();
    const { handleRemoveFromCart, handleAddQuantity, handleReduceQuantity, cartTotal } = useCart();

    const toggleDrawer = (anchor) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(anchor);
    };

    const list = () => (
        <Box
            className='cart-item-container'
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <Box
                p={2}
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <AddShoppingCartRoundedIcon />
                <Typography pl={2} variant='h5' component='div'>Shopping Cart</Typography>
            </Box>
            <Divider />
            {
                cartItems.length === 0 ? <EmptyCart /> :
                    cartItems.map(product =>
                        <FilledCart
                            key={product._id}
                            product={product}
                            handleAddQuantity={handleAddQuantity}
                            handleReduceQuantity={handleReduceQuantity}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    )
            }
            <Box
                sx={{
                    position: 'absolute',
                    left: '10%',
                    right: '10%',
                    bottom: "0.5rem"
                }}
            >
                <NavLink
                    onClick={toggleDrawer(false)}
                    to='/cart'
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        sx={{
                            fontSize: '1rem',
                            fontWeight: '400'
                        }}
                        variant='contained'
                        color='success'
                        size='large'
                        fullWidth
                    >
                        Proceed to cart ($ {cartTotal})
                    </Button>
                </NavLink>
            </Box>
        </Box>
    );

    return (
        <div>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: '40%',
                    right: '2.5%',
                    opacity: '1',
                    borderRadius: '10px',
                    padding: '5px',
                    zIndex: '20',
                    backgroundColor: '#212121'
                }}
                onClick={toggleDrawer(true)}
            >
                <Badge badgeContent={cartItems.length} color="error">
                    <ShoppingCartCheckoutRoundedIcon sx={{ fontSize: '3rem', color: '#f2e8c6' }} />
                </Badge>
            </Box>
            <Drawer
                anchor={'right'}
                open={drawer}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );

};

export default TemporaryDrawer;