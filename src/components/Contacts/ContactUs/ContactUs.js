import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './ContactUs.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LayersIcon from '@mui/icons-material/Layers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MobileApp from '../../Shared/MobileApp/MobileApp';
import Footer from '../../Shared/Footer/Footer';
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';

const ContactUs = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/contact-us/contacts-page_ypzxhp.jpg';

    return (
        <section id='contact-us'>
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
                    <Box sx={{ fontSize: '4rem', color: 'white' }} component='h5'>CONTACT US</Box>
                </Box>

                <section id='contact-us-grid'>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Card sx={{ boxShadow: '5px 5px 30px gray', maxWidth: "540px", borderRadius: '8px' }}>
                                    <Grid container>
                                        <Grid item xs={2} p={2}>
                                            <div className="contact-us-card-background">
                                                <LocationOnIcon sx={{ color: '#6C757D' }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={10} pl={3}>
                                            <CardContent>
                                                <Typography variant='h6' component='div'
                                                    sx={{
                                                        fontFamily: 'Oswald, sans-serif',
                                                        color: '#642F21',
                                                        fontWeight: '600'
                                                    }}
                                                    gutterBottom
                                                >
                                                    LOCATION
                                                </Typography>
                                                <Typography variant="body1" color='text.secondary'>Phone: 789-654-3210</Typography>
                                                <Typography variant="body1" color='text.secondary' mb={2}>House: 65, Road: 31,
                                                    <br />
                                                    Sector: 07, Uttara, Dhaka-1230
                                                </Typography>
                                                <Typography variant="body2" color='text.secondary'>Daily 11 AM to 10 PM</Typography>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card sx={{ boxShadow: '5px 5px 30px gray', maxWidth: "540px", borderRadius: '8px' }}>

                                    <Grid container>
                                        <Grid item xs={2} p={2}>
                                            <div className="contact-us-card-background">
                                                <AccessTimeIcon sx={{ color: '#6C757D' }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={10} pl={3}>
                                            <CardContent>
                                                <Typography variant='h6' component='div'
                                                    sx={{
                                                        fontFamily: 'Oswald, sans-serif',
                                                        color: '#642F21',
                                                        fontWeight: '600'
                                                    }}
                                                    gutterBottom
                                                >
                                                    WORKING HOURS
                                                </Typography>
                                                <Typography variant="body1" color='text.secondary'>Phone: 789-654-3210</Typography>
                                                <Typography variant="body1" color='text.secondary' mb={2}>House: 65, Road: 31,
                                                    <br />
                                                    Sector: 07, Uttara, Dhaka-1230
                                                </Typography>
                                                <Typography variant="body2" color='text.secondary'>Daily 11 AM to 10 PM</Typography>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card sx={{ boxShadow: '5px 5px 30px gray', maxWidth: "540px", borderRadius: '8px' }}>
                                    <Grid container>
                                        <Grid item xs={2} p={2}>
                                            <div className="contact-us-card-background">
                                                <LayersIcon sx={{ color: '#6C757D' }} />
                                            </div>
                                        </Grid>

                                        <Grid item xs={10} pl={3}>
                                            <CardContent>
                                                <Typography variant='h6' component='div'
                                                    sx={{
                                                        fontFamily: 'Oswald, sans-serif',
                                                        color: '#642F21',
                                                        fontWeight: '600'
                                                    }}
                                                    gutterBottom
                                                >
                                                    ORDER NOW
                                                </Typography>
                                                <Typography variant="body1" color='text.secondary'>Phone: 789-654-3210</Typography>
                                                <Typography variant="body1" color='text.secondary' mb={2}>House: 65, Road: 31,
                                                    <br />
                                                    Sector: 07, Uttara, Dhaka-1230
                                                </Typography>
                                                <Typography variant="body2" color='text.secondary'>Daily 11 AM to 10 PM</Typography>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <section id='leave-message'>
                    <Container>
                        <h5>LEAVE A MESSAGE</h5>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} mb={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Your Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={4} mb={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Your Email"
                                    type="email"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth
                                    size="small"
                                    helperText="We'll never share your email with anyone else."
                                />
                            </Grid>
                            <Grid item xs={12} md={4} mb={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="What is this about? ..."
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Your message..."
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    sx={{
                                        fontFamily: 'Oswald, sans-serif',
                                        fontSize: '1.2rem'
                                    }}
                                    variant='contained'
                                    color='error'
                                    type="submit"
                                >
                                    SEND MESSAGE
                                </Button>
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

export default ContactUs;