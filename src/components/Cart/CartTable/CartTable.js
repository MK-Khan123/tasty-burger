import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './CartTable.css';

const CartTable = ({ cartItems, handleRemoveFromCart, handleAddQuantity, handleReduceQuantity }) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize: '1.3rem',
        },
        [`&.${tableCellClasses.body}`]: {
            padding: '0.5rem',
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

    return (
        <section id='cart-table'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>#</StyledTableCell>
                            <StyledTableCell>Product</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell align="center">Quantity</StyledTableCell>
                            <StyledTableCell align="center">Total</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((product, index) => {
                            const { name, image, price, _id, quantity } = product;
                            return (
                                <StyledTableRow key={name}>
                                    <StyledTableCell align='center' component="th" scope="row">
                                        {index + 1}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <img className='cart-table-image' src={image} alt="" />
                                        <Box component='div' sx={{ fontWeight: '500', textTransform: 'uppercase' }}>
                                            {name}
                                        </Box>
                                    </StyledTableCell>
                                    <StyledTableCell>$ {price}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <IndeterminateCheckBoxRoundedIcon
                                                onClick={() => handleReduceQuantity(_id)}
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'rgba(244, 0, 9, 0.8)'
                                                }}
                                            />
                                            <Box mx={1}>{quantity}</Box>
                                            <AddBoxRoundedIcon
                                                onClick={() => handleAddQuantity(_id)}
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'rgba(0, 130, 0, 0.8)'
                                                }}
                                            />
                                        </Box>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">$ {price * quantity}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <DeleteOutlineRoundedIcon
                                            onClick={() => handleRemoveFromCart(_id)}
                                            sx={{ fontSize: '2rem', color: '#525252', '&:hover': { color: '#DC3545', cursor: 'pointer' } }} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            );
                        }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
};

export default CartTable;