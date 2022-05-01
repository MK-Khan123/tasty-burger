import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './FAQs.css';
import Subscription from '../../Shared/Subscription/Subscription';
import Footer from '../../Shared/Footer/Footer';
import { Box, Button, Container, Grid } from '@mui/material';

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
                    height: '25.625rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white' }} component='h5'>F.A.Q.</Box>
                </Box>
                <section id='questions'>
                    <Container>
                        <Grid container columnSpacing={4} rowSpacing={1}>
                            <Grid item md={6}>
                                <h5>WHAT PAYMENT METHODS DO YOU ACCEPT?</h5>
                                <p>Etiam amet mauris suscipit in odio. Integer congue undo metus. Vitae arcu mollis blandit ultrice ligula egestas a magna suscipit lectus magna suscipit luctus blandit molestie purus</p>
                            </Grid>
                            <Grid item md={6}>
                                <h5>HOW CAN I CHANGE SOMETHING IN MY ORDER?</h5>
                                <p>Aliqum mullam blandit and tempor sapien donec ipsum at gravida porta. Velna vitae auctor congue tristique</p>
                            </Grid>
                            <Grid item md={6}>
                                <h5>IS MY PAYMENT INFORMATION SECURE?</h5>
                                <p>Aliqum mullam blandit and tempor sapien donec ipsum gravida porta. Velna vitae auctor congue quaerat and sodales sapien</p>
                            </Grid>
                            <Grid item md={6}>
                                <h5>HOW MUCH IS SHIPPING?</h5>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                            </Grid>
                            <Grid item md={6}>
                                <h5>IS THERE A DISCOUNT CODE?</h5>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                            </Grid>
                            <Grid item md={6}>
                                <h5>HOW LONG WILL MY ORDER TAKE TO BE DELIVERED?</h5>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula ligula massa in faucibus orci a luctus ultrices ipsum primis in faucibus odio feugiat primis luctus in ligula eros ligula</p>
                            </Grid>
                            <Grid item md={6}>
                                <h5>WHAT IF I HAVE LOST MY GIFT CERTIFICATE?</h5>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                            </Grid>
                            <Grid item md={6}>
                                <h5>HOW DO I TRACK MY ORDER?</h5>
                                <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                            </Grid>
                        </Grid>
                        <Box sx={{ textAlign: 'center', paddingTop: '2.5rem' }}>
                            <Button
                                size='large'
                                color='error'
                                variant='contained'
                                sx={{ fontFamily: 'Oswald, sans-serif', maxWidth: '15.625rem', fontSize: '1.1rem' }}
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