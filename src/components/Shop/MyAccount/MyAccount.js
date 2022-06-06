import React, { useEffect } from 'react';
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import useAuth from '../../../hooks/useAuth';
import './MyAccount.css';

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

const MyAccount = () => {
    document.title = 'Testo Burger | Account';

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/shop-tab/shop-tab_j7hrho.jpg';

    const { signInUsingGoogle, signInUsingGithub, signInUsingEmail, registerUsingEmail } = useAuth();

    //For handling Login
    const {
        register: registerLogin,
        formState: {
            errors: loginError,
            isSubmitSuccessful: isLoginSubmitSuccessful
        },
        handleSubmit: handleSubmitLogin,
        reset: resetLogin
    } = useForm();

    //For handling Registration (Sign up)
    const {
        register: registerSignUp,
        formState: {
            errors: registrationError,
            isSubmitSuccessful: isRegistrationSubmitSuccessful
        },
        handleSubmit: handleSubmitRegistration,
        watch,
        reset: resetRegistration
    } = useForm();

    //This useEffect is used to clear input fields after successful Login form and Registration form submission
    useEffect(() => {
        if (isLoginSubmitSuccessful) {
            resetLogin();
        }
        if (isRegistrationSubmitSuccessful) {
            resetRegistration();
        }
    }, [
        isLoginSubmitSuccessful, 
        isRegistrationSubmitSuccessful, 
        resetLogin, 
        resetRegistration
    ]);

    const login = data => {
        const { loginEmail, loginPassword } = data;
        return signInUsingEmail(loginEmail, loginPassword);
    };

    const registration = data => {
        const { registrationName, registrationEmail, registrationPassword } = data;
        return registerUsingEmail(registrationName, registrationEmail, registrationPassword);
    };

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
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        size="small"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerLogin("loginEmail", { required: "Email is required" })}
                                        error={!!loginError.loginEmail}
                                        helperText={loginError?.loginEmail ? loginError.loginEmail.message : null}
                                    />
                                    <CssTextField sx={{ mb: 2 }}
                                        id="outlined-password-input"
                                        type="password"
                                        label="Password"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerLogin("loginPassword", { required: "Password is required" })}
                                        error={!!loginError.loginPassword}
                                        helperText={loginError?.loginPassword ? loginError.loginPassword.message : null}
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
                                        label="Name"
                                        type="text"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerSignUp("registrationName", { required: "Name is required" })}
                                        error={!!registrationError.registrationName}
                                        helperText={registrationError?.registrationName ? registrationError.registrationName.message : null}
                                    />
                                    <CssTextField sx={{ mb: 2 }}
                                        id="outlined-basic2"
                                        label="Email"
                                        type="email"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerSignUp("registrationEmail", { required: "Email is required" })}
                                        error={!!registrationError.registrationEmail}
                                        helperText={registrationError?.registrationEmail ? registrationError.registrationEmail.message : null}
                                    />
                                    <CssTextField sx={{ mb: 3 }}
                                        id="outlined-password-input1"
                                        type="password"
                                        label="Password"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerSignUp("registrationPassword", { required: "Password is required" })}
                                        error={!!registrationError.registrationPassword}
                                        helperText={registrationError?.registrationPassword ? registrationError.registrationPassword.message : null}
                                    // autoComplete="current-password"
                                    />
                                    <CssTextField
                                        id="outlined-password-input2"
                                        type="password"
                                        label="Confirm Password"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerSignUp("confirmPassword", {
                                            validate: val => {
                                                if (watch('registrationPassword') !== val) {
                                                    return "Password and Confirm Password do no match";
                                                }
                                            }
                                        })}
                                        error={!!registrationError.confirmPassword}
                                        helperText={registrationError?.confirmPassword ? registrationError.confirmPassword.message : null}
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