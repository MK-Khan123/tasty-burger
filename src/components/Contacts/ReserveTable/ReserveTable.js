import { Box, Button, Container, Grid, TextField } from '@mui/material';
import Footer from '../../Shared/Footer/Footer';
import MobileApp from '../../Shared/MobileApp/MobileApp';
import Navbar from '../../Shared/Navbar/Navbar';
import './ReserveTable.css';

const ReserveTable = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reserve-table/booking-page_geqouk.jpg';

    return (
        <section id='reserve-table'>
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
                    <Box sx={{ fontSize: '4rem', color: 'white', fontWeight: '500' }} component='h5'>RESERVE A TABLE</Box>
                </Box>

                <section id='reserve-table-form'>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} mb={2}>
                                <TextField
                                    type="date"
                                    label="Date"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    size="small"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6} mb={2}>
                                <TextField
                                    label="Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} mb={2}>
                                <TextField
                                    label="Email address"
                                    type="email"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth
                                    size="small"
                                    helperText="We'll never share your email with anyone else."
                                />
                            </Grid>
                            <Grid item xs={12} md={6} mb={2}>
                                <TextField
                                    label="Phone Number"
                                    type="tel"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <TextField
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
                                    sx={{ fontSize: '1.2rem' }}
                                    variant='contained'
                                    color='error'
                                    type="submit"
                                >
                                    Request Booking
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

export default ReserveTable;