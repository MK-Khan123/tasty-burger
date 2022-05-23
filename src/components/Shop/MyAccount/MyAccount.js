import React from 'react';
import './MyAccount.css';
import Navbar from '../../Shared/Navbar/Navbar';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Footer from '../../Shared/Footer/Footer';
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MyAccount = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/shop-tab/shop-tab_j7hrho.jpg';

    const { signInUsingGoogle, signInUsingGithub } = useAuth();

    return (
        <section id='my-account'>
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
                    <Box sx={{ fontSize: '4rem', color: 'white', fontWeight: '500' }} component='h5'>MY ACCOUNT</Box>
                </Box>

                <section id='user-info'>
                    <Container>
                        <Grid container mt={4} spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Box
                                    component='h5'
                                    sx={{
                                        fontSize: '2rem',
                                        fontWeight: '500',
                                        marginTop: 0,
                                        marginBottom: '1.5rem'
                                    }}
                                >
                                    Login
                                </Box>
                                <form
                                    style={{
                                        border: '2px solid #DEE2E6',
                                        borderRadius: '8px',
                                        padding: '35px 25px'
                                    }}
                                >
                                    <TextField sx={{ mb: 2 }}
                                        id="outlined-basic"
                                        label="Your Email"
                                        type="email"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                        size="small"
                                        helperText="We'll never share your email with anyone else."
                                    />
                                    <TextField sx={{ mb: 2 }}
                                        id="outlined-password-input"
                                        type="password"
                                        label="Password"
                                        size="small"
                                        required
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        autoComplete="current-password"
                                    />
                                    <FormGroup sx={{ mb: 2 }}>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                                    </FormGroup>

                                    <Button
                                        size='large'
                                        type="submit"
                                        sx={{
                                            backgroundColor: '#FFC107',
                                            color: 'black',
                                            '&:hover': { backgroundColor: '#FFCA2C' }
                                        }}
                                    >
                                        Log In
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    component='h5'
                                    sx={{
                                        fontSize: '2rem',
                                        fontWeight: '500',
                                        marginTop: 0,
                                        marginBottom: '1.5rem'
                                    }}
                                >
                                    Register
                                </Box>
                                <form
                                    style={{
                                        border: '2px solid #DEE2E6',
                                        borderRadius: '8px',
                                        padding: '35px 25px'
                                    }}
                                >
                                    <TextField sx={{ mb: 2 }}
                                        id="outlined-basic1"
                                        label="Your Email"
                                        type="email"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        required
                                        fullWidth
                                        size="small"
                                        helperText="We'll never share your email with anyone else."
                                    />
                                    <TextField sx={{ mb: 3 }}
                                        id="outlined-password-input1"
                                        type="password"
                                        label="Your Password"
                                        size="small"
                                        required
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        autoComplete="current-password"
                                    />
                                    <TextField
                                        id="outlined-password-input2"
                                        type="password"
                                        label="Confirm Your Password"
                                        size="small"
                                        required
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        autoComplete="current-password"
                                    />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                        my={3}
                                    >
                                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                                    </Typography>

                                    <Button
                                        size='large'
                                        type="submit"
                                        sx={{
                                            backgroundColor: '#FFC107',
                                            color: 'black',
                                            '&:hover': { backgroundColor: '#FFCA2C' }
                                        }}
                                    >
                                        Register
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ textAlign: 'center' }} mt={4}>
                                    <Typography
                                        sx={{ fontWeight: '500' }}
                                        variant="h5"
                                        gutterBottom
                                        component="div"
                                    >
                                        OR SIGN IN USING
                                    </Typography>
                                    <GoogleIcon onClick={signInUsingGoogle} className="google-icon" />
                                    <TwitterIcon className="twitter-icon" />
                                    <FacebookRoundedIcon className="facebook-icon" />
                                    <GitHubIcon onClick={signInUsingGithub} className="github-icon" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default MyAccount;