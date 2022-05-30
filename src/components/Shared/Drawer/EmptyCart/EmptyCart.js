import React from 'react';
import Box from '@mui/material/Box';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Typography from '@mui/material/Typography';

const EmptyCart = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20rem',
            }}
        >
            <Box
                p={3}
                sx={{
                    backgroundImage: 'radial-gradient( circle 588px at 31.7% 40.2%,  rgba(225,200,239,1) 21.4%, rgba(163,225,233,1) 57.1% )',
                    borderRadius: '50%',
                }}
            >
                <LocalMallIcon sx={{ fontSize: '2rem', color: '#393e46' }} />
            </Box>
            <Typography variant="h6" gutterBottom>
                Your cart is empty
            </Typography>
            <Typography px={4} mt={2} textAlign='center' variant="body1" gutterBottom>
                No items added in your cart yet. Please add products on your cart.
            </Typography>
        </Box>
    );
};

export default EmptyCart;