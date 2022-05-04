import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import './Subscription.css';

const Subscription = () => {

    return (
        <Container>
            <section id='subscription'>
                <Box
                    sx={{
                        textAlign: 'center',
                        fontSize: '2.625rem',
                        fontWeight: '600'
                    }}
                    component='h5'
                >
                    SUBSCRIBE TO NEWSLETTER
                </Box>
                <Box
                    sx={{
                        fontFamily: 'Roboto, sans-serif',
                        textAlign: 'center',
                        fontSize: '1.125rem',
                        color: '#888'
                    }}
                    component='p'
                >
                    Subscribe to the weekly newsletter for all the latest updates
                </Box>
                <Box
                    sx={{
                        fontFamily: 'Roboto, sans-serif',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly'
                    }}
                >
                    <Box sx={{ paddingTop: '1.2rem' }}>
                        <TextField
                            type='email'
                            name='email'
                            label="Email Address"
                            helperText="We'll never share your email address with anyone else"
                            fullWidth
                            id="inputEmail" />
                    </Box>
                    <Box sx={{ paddingTop: '1.1rem' }}>
                        <Button
                            sx={{ fontFamily: 'Oswald, sans-serif' }}
                            color='error'
                            variant='contained'
                        >
                            SIGN UP
                        </Button>
                    </Box>
                </Box>
            </section>
        </Container >
    );
};

export default Subscription;