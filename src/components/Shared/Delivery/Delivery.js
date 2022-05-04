import { Box, Button } from '@mui/material';
import React from 'react';
import './Delivery.css';

const Delivery = () => {
    const deliveryBackground = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/delivery-banner_dssklb.jpg';

    return (
        <section id='delivery' style={{ backgroundImage: `url(${deliveryBackground})` }}>
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px'
                }}
            >
                <Box
                    sx={{
                        fontSize: '2.375rem',
                        color: '#642F21',
                        fontWeight: '400',
                        textAlign: 'center'
                    }}
                    component='h4'
                >
                    WE GUARANTEE
                </Box>
                <Box
                    sx={{ fontSize: '4.5rem', color: '#642F21', textAlign: 'center' }}
                    component='h5'
                >
                    30 MINUTES DELIVERY!
                </Box>
                <Box
                    sx={{
                        padding: '0 20%',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1.1rem',
                        fontWeight: '300',
                        textAlign: 'center',
                        paddingY: '10px'
                    }}
                    component='p'
                >
                    Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius luctus neque magna
                </Box>
                <Button
                    sx={{
                        maxWidth: '15.625rem',
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: '1.1rem',
                        marginTop: '1rem'
                    }}
                    size='large'
                    variant='contained'
                    color='error'
                >
                    CALL: 789-654-3210
                </Button>
            </Box>
        </section>
    );
};

export default Delivery;