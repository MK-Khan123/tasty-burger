import React from 'react';
import './MyAccount.css';
import Navbar from '../../Shared/Navbar/Navbar';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Footer from '../../Shared/Footer/Footer';
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const MyAccount = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/shop-tab/shop-tab_j7hrho.jpg';

    const CssTextField = styled(TextField)({
        '& .MuiInputLabel-root': {
            fontFamily: 'Roboto, sans-serif'
        },

        '& .MuiOutlinedInput-root': {
            fontFamily: 'Roboto, sans-serif'
        },

        '& .MuiFormHelperText-root': {
            fontFamily: 'Roboto, sans-serif'
        }
    });

    const { signInUsingGoogle, signInUsingGithub, signInUsingEmail, registerUsingEmail } = useAuth();

    //For handling Login
    const { register, formState: { errors: loginError }, handleSubmit: handleSubmitLogin } = useForm();

    //For handling registration
    const { register: register2, formState: { errors: registrationError }, handleSubmit: handleSubmitRegistration } = useForm();

    const login = data => signInUsingEmail(data.email, data.password);
    const registration = data => registerUsingEmail(data.email, data.password);

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
                                    onSubmit={handleSubmitLogin(login)}
                                    style={{
                                        border: '2px solid #DEE2E6',
                                        borderRadius: '8px',
                                        padding: '35px 25px'
                                    }}
                                >
                                    <CssTextField sx={{ mb: 2 }}
                                        id="outlined-basic"
                                        label="Your Email"
                                        type="email"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...register("email", { required: "Email is required" })}
                                        error={!!loginError.email}
                                        helperText={loginError?.email ? loginError.email.message : null}
                                        fullWidth
                                        size="small"
                                    />
                                    <CssTextField sx={{ mb: 2 }}
                                        id="outlined-password-input"
                                        type="password"
                                        label="Password"
                                        size="small"
                                        {...register("password", { required: "Password is required" })}
                                        error={!!loginError.password}
                                        helperText={loginError?.password ? loginError.password.message : null}
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    // autoComplete="current-password"
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
                                    onSubmit={handleSubmitRegistration(registration)}
                                    style={{
                                        border: '2px solid #DEE2E6',
                                        borderRadius: '8px',
                                        padding: '35px 25px'
                                    }}
                                >
                                    <CssTextField sx={{ mb: 2 }}
                                        id="outlined-basic1"
                                        label="Your Email"
                                        type="email"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...register2("email", { required: "Email is required" })}
                                        error={!!registrationError.email}
                                        helperText={registrationError?.email ? registrationError.email.message : null}
                                        fullWidth
                                        size="small"
                                    />
                                    <CssTextField sx={{ mb: 3 }}
                                        id="outlined-password-input1"
                                        type="password"
                                        label="Your Password"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...register2("password", { required: "Password is required" })}
                                        error={!!registrationError.password}
                                        helperText={registrationError?.password ? registrationError.password.message : null}
                                    // autoComplete="current-password"
                                    />
                                    <CssTextField
                                        id="outlined-password-input2"
                                        type="password"
                                        label="Confirm Your Password"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    // autoComplete="current-password"
                                    />
                                    <Typography
                                        fontFamily={'Roboto, sans-serif'}
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