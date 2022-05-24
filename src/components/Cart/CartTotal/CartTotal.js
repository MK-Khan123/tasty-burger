import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import './CartTotal.css';

const CartTotal = () => {
    return (
        <section id='cart-total'>
            <Grid container>
                <Grid item md={7}></Grid>
                <Grid item xs={12} md={5}>
                    <Box pt={2} px={2} className="cart-total-div">
                        <Typography sx={{ textAlign: 'center', fontWeight: '500' }} variant="h5" component="div">
                            CART TOTAL
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography fontWeight={400} variant="h6" component="div">
                                Subtotal
                            </Typography>
                            <Typography fontWeight={400} variant="h6" component="div">
                                $ 39.5
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography fontWeight={400} variant="h6" component="div">
                                VAT (10%)
                            </Typography>
                            <Typography fontWeight={400} variant="h6" component="div">
                                $ 3.95
                            </Typography>
                        </Box>
                        <hr />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h6" component="div">
                                TOTAL
                            </Typography>
                            <Typography variant="h6" component="div">
                                $ 39.5
                            </Typography>
                        </Box>
                        <Box py={2}>
                            <NavLink to='/checkout' style={{ textDecoration: 'none' }}>
                                <Button size="large" fullWidth color='success' variant='contained'>
                                    Proceed to checkout
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </section>
    );
};

export default CartTotal;