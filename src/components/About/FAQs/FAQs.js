import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './FAQs.css';
import Subscription from '../../Shared/Subscription/Subscription';
import Footer from '../../Shared/Footer/Footer';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const FAQs = () => {

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/faqs/faqs-page_nlurqn.jpg';

    return (
        <section id='FAQs'>
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
                    <Box sx={{ fontSize: '4rem', color: 'white', fontWeight: '500' }} component='h5'>F.A.Q.s</Box>
                </Box>
                <section id='questions'>
                    <Container>
                        <Grid container columnSpacing={4} rowSpacing={1}>
                            <Grid item md={6}>
                                <Typography className='questions-font' variant="h6" gutterBottom component="div">
                                    WHAT PAYMENT METHODS DO YOU ACCEPT?
                                </Typography>
                                <p>Etiam amet mauris suscipit in odio. Integer congue undo metus. Vitae arcu mollis blandit ultrice ligula egestas a magna suscipit lectus magna suscipit luctus blandit molestie purus</p>
                            </Grid>
                            <Grid item md={6}>
                                <Typography className='questions-font' variant="h6" gutterBottom component="div">
                                    HOW CAN I CHANGE SOMETHING IN MY ORDER?
                                </Typography>
                                <p>Aliqum mullam blandit and tempor sapien donec ipsum at gravida porta. Velna vitae auctor congue tristique</p>
                            </Grid>
                            <Grid item md={6}>
                                <Typography className='questions-font' variant="h6" gutterBottom component="div">
                                    IS MY PAYMENT INFORMATION SECURE?
                                </Typography>
                                <p>Aliqum mullam blandit and tempor sapien donec ipsum gravida porta. Velna vitae auctor congue quaerat and sodales sapien</p>
                            </Grid>
                            <Grid item md={6}>
                                <Typography className='questions-font' variant="h6" gutterBottom component="div">
                                    HOW MUCH IS SHIPPING?
                                </Typography>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                            </Grid>
                            <Grid item md={6}>
                                <Typography className='questions-font' variant="h6" gutterBottom component="div">
                                    IS THERE A DISCOUNT CODE?
                                </Typography>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                            </Grid>
                            <Grid item md={6}>
                                <Typography className='questions-font' variant="h6" gutterBottom component="div">
                                    HOW LONG WILL MY ORDER TAKE TO BE DELIVERED?
                                </Typography>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula ligula massa in faucibus orci a luctus ultrices ipsum primis in faucibus odio feugiat primis luctus in ligula eros ligula</p>
                            </Grid>
                            <Grid item md={6}>
                                <Typography className='questions-font' variant="h6" gutterBottom component="div">
                                    WHAT IF I HAVE LOST MY GIFT CERTIFICATE?
                                </Typography>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                            </Grid>
                            <Grid item md={6}>
                                <Typography className='questions-font' variant="h6" gutterBottom component="div">
                                    HOW DO I TRACK MY ORDER?
                                </Typography>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                            </Grid>
                        </Grid>
                        <Box sx={{ textAlign: 'center', paddingTop: '2.5rem' }}>
                            <Button
                                size='large'
                                color='error'
                                variant='contained'
                                sx={{ maxWidth: '15.625rem', fontSize: '1.1rem' }}
                            >
                                STILL HAVE A QUESTION?
                            </Button>
                        </Box>
                    </Container>
                </section>

                <Subscription />
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default FAQs;