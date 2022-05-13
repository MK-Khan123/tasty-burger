import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Cart.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import fakeData from '../fakeData';
import MobileApp from '../Shared/MobileApp/MobileApp';
import Footer from '../Shared/Footer/Footer';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid } from '@mui/material';

const Cart = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/cart/cart-page_npf8up.jpg';

    const productData = fakeData.slice(0, 2);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontFamily: 'Oswald, sans-serif',
            fontSize: '1.3rem',
        },
        [`&.${tableCellClasses.body}`]: {
            fontFamily: 'Oswald, sans-serif',
            fontSize: '1.1rem',
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    console.log(productData);
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
                    height: '25.625rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white' }} component='h5'>SHOPPING CART</Box>
                </Box>

                <section id='cart-table'>
                    <Container>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align='center'>#</StyledTableCell>
                                        <StyledTableCell>Product</StyledTableCell>
                                        <StyledTableCell>Price</StyledTableCell>
                                        <StyledTableCell>Quantity</StyledTableCell>
                                        <StyledTableCell>Total</StyledTableCell>
                                        <StyledTableCell align="center">Actions</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productData.map((product, index) => {
                                        const { name, image, price } = product;
                                        return (
                                            <StyledTableRow key={name}>
                                                <StyledTableCell align='center' component="th" scope="row">
                                                    {index + 1}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    <img className='cart-table-image' src={image} alt="" />
                                                    <Box ml={2} component='span' sx={{ fontWeight: '500', textTransform: 'uppercase' }}>
                                                        {name}
                                                    </Box>
                                                </StyledTableCell>
                                                <StyledTableCell>$ {price}</StyledTableCell>
                                                <StyledTableCell>
                                                    <input className='input-design' type="number" defaultValue={1} min='1' />
                                                </StyledTableCell>
                                                <StyledTableCell>$ {price}</StyledTableCell>
                                                <StyledTableCell align="center">
                                                    <DeleteOutlineRoundedIcon
                                                        sx={{ fontSize: '2rem', color: '#525252', '&:hover': { color: '#DC3545', cursor: 'pointer' } }} />
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        );
                                    }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Box sx={{ textAlign: 'end' }} py={3}>
                            <Button sx={{ fontFamily: 'Oswald, sans-serif' }} color='success' variant='contained'>Update Cart</Button>
                        </Box>
                    </Container>
                </section>

                <section id='cart-total'>
                    <Container>
                        <Grid container>
                            <Grid item md={7}></Grid>
                            <Grid item xs={12} md={5}>
                                <Box px={2} className="cart-total-div">
                                    <Box py={2} component='h5'>CART TOTAL</Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h5>Subtotal</h5>
                                        <h5>$ 39.5</h5>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h5>VAT (10%)</h5>
                                        <h5>$ 3.95</h5>
                                    </Box>
                                    <hr />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h5>Total</h5>
                                        <h5>$ 39.5</h5>
                                    </Box>
                                    <Box py={2}>
                                        <NavLink to='/checkout'>
                                            <Button sx={{ fontFamily: 'Oswald, sans-serif' }} size="large" fullWidth color='success' variant='contained'>
                                                Proceed to checkout
                                            </Button>
                                        </NavLink>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <MobileApp />
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Cart;