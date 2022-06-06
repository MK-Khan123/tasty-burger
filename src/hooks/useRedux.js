import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from './useAuth';
import {
    addToCart,
    removeFromCart,
    addQuantity,
    reduceQuantity,
    emptyCart
} from '../store/cart';
import {
    handle_name,
    handle_email,
    handle_address_line,
    handle_zip_code,
    handle_city,
    handle_card_details,
    handle_products_ordered,
    handle_total_paid,
    empty_checkout_state
} from '../store/checkout';

const useRedux = () => {

    //Cart Related functions and state    
    const cartItems = useSelector(state => state.entities.cart);

    //Checkout Data collection state
    const checkoutData = useSelector(state => state.entities.checkout);

    const { user } = useAuth();

    const dispatch = useDispatch();

    //To calculate the total bill on Cart
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const cartProductPrice = cartItems.map(product => product.quantity * product.price);
        const totalProductPrice = cartProductPrice.reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0).toFixed(2);
        setCartTotal(parseFloat(totalProductPrice));
    }, [cartItems]);

    //To store the products added on cart on the checkoutData slice so that the data can be stored in, after the order has been placed
    useEffect(() => {
        dispatch(handle_products_ordered({ products_ordered: cartItems })); //Adding products from Cart into Checkout Data

        dispatch(handle_total_paid({ total_paid: `$ ${(cartTotal + (cartTotal * 0.1)).toFixed(2)}` })); //Cart Total after calculating VAT and adding it into Checkout Data

        dispatch(handle_email({ email: user?.email })); //Adding the user's email into Checkout Data

    }, [cartItems, dispatch, cartTotal, user?.email]);

    //Cart management related functions

    const handleAddToCart = (foodItemData) => {
        const { category, name, image, price, _id } = foodItemData;
        const foodData = {
            category,
            name,
            image,
            price,
            _id,
            quantity: 1
        };
        dispatch(addToCart(foodData));
    }

    const handleRemoveFromCart = (_id) => dispatch(removeFromCart({ _id }));

    const handleAddQuantity = (_id) => {
        dispatch(addQuantity({ _id }));
    };

    const handleReduceQuantity = (_id) => {
        dispatch(reduceQuantity({ _id }));
    };

    const handleEmptyCart = () => dispatch(emptyCart());

    //Checkout Data collection related functions

    const handleName = value => dispatch(handle_name({ name: value }));
    const handleAddressLine = value => dispatch(handle_address_line({ address_line: value }));
    const handleZipCode = value => dispatch(handle_zip_code({ zip_code: value }));
    const handleCity = value => dispatch(handle_city({ city: value }));
    const handleCardDetails = value => dispatch(handle_card_details({ card_details: value }));
    const emptyCheckoutState = () => dispatch(empty_checkout_state());

    return {
        handleAddToCart,
        handleRemoveFromCart,
        handleAddQuantity,
        handleReduceQuantity,
        handleEmptyCart,
        cartTotal,
        cartItems,
        checkoutData,
        handleName,
        handleAddressLine,
        handleZipCode,
        handleCity,
        handleCardDetails,
        emptyCheckoutState
    };
};

export default useRedux;