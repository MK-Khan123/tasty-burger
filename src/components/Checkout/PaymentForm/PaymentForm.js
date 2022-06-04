import React, { useState } from 'react';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';
import { logEvent, Result, ErrorResult } from './util';
import { Button } from '@mui/material';
import './PaymentForm.css';
import useReduxState from '../../../hooks/useReduxState';

const ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: '18px',
            color: '#424770',
            letterSpacing: '0.025em',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: 'red',
        },
    },
};

const PaymentForm = () => {
    //For Stripe Payment
    const elements = useElements();
    const stripe = useStripe();

    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const { handleCardDetails } = useReduxState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardNumberElement);

        if (card == null) {
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                name,
            },
        });

        if (payload.error) {
            console.log('[error]', payload.error);
            setErrorMessage(payload.error.message);
            setPaymentMethod(null);
        } else {
            console.log('[PaymentMethod]', payload.paymentMethod);
            const cardData = payload.paymentMethod;
            const { billing_details, card } = cardData;
            const card_details = {
                name_on_card: billing_details.name,
                card_brand: card.brand,
                card_number: card.last4,
                card_expiration: `${card.exp_month} / ${card.exp_year}`
            }
            handleCardDetails(card_details);
            setPaymentMethod(payload.paymentMethod);
            setErrorMessage(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className='payment-form-label' htmlFor="name">Name on Card</label>
            <input
                className='payment-form-input'
                id="name"
                type='text'
                required
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <label className='payment-form-label' htmlFor="cardNumber">Card Number</label>
            <CardNumberElement
                id="cardNumber"
                onBlur={logEvent('blur')}
                onChange={logEvent('change')}
                onFocus={logEvent('focus')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
            />
            <label className='payment-form-label' htmlFor="expiry">Card Expiration</label>
            <CardExpiryElement
                id="expiry"
                onBlur={logEvent('blur')}
                onChange={logEvent('change')}
                onFocus={logEvent('focus')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
            />
            <label className='payment-form-label' htmlFor="cvc">CVC</label>
            <CardCvcElement
                id="cvc"
                onBlur={logEvent('blur')}
                onChange={logEvent('change')}
                onFocus={logEvent('focus')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
            />
            {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
            {paymentMethod && <Result>Payment Successful!</Result>}
            <Button variant='contained' color='secondary' type="submit" disabled={!stripe}>
                Pay
            </Button>
        </form>
    );
};

export default PaymentForm;
