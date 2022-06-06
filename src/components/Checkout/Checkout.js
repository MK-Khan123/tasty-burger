import { Fragment, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm/AddressForm';
import PaymentForm from './PaymentForm/PaymentForm';
import Review from './Review/Review';
import { NavLink } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useReduxState from '../../hooks/useReduxState';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://testo-burger.web.app/">
                Testo Burger Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return <AddressForm />
        case 1:
            return (
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            );
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

const Checkout = () => {
    document.title = 'Testo Burger | Checkout';

    const logo = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/logo_lipngj.png';

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const { cartItems, checkoutData, handleEmptyCart, emptyCheckoutState } = useReduxState();

    const handlePlaceOrder = () => {
        //send data to the server side
        fetch('https://morning-badlands-52849.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkoutData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                emptyCheckoutState();
                handleEmptyCart();
            });
    };

    console.log('Checkout Data', checkoutData);
    console.log('Cart after Place Order', cartItems);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <NavLink to='/home'>
                        <img style={{ maxWidth: '120px', maxHeight: '100px' }} src={logo} alt="" />
                    </NavLink>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Fragment>
                        {activeStep === steps.length ? (
                            <Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #{Math.floor(Math.random() * 10000000)}. We have emailed your order
                                    confirmation, and will send you an update when your order has
                                    shipped.
                                </Typography>
                            </Fragment>
                        ) : (
                            <Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            handleNext();
                                            if (activeStep === steps.length - 1) {
                                                handlePlaceOrder();
                                            }
                                        }}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </Box>
                            </Fragment>
                        )}
                    </Fragment>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}

export default Checkout;
