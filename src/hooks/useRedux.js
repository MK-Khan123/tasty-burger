import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, addQuantity, reduceQuantity } from '../store/cart';
import {
    handle_name,
    handle_address_line,
    handle_zip_code,
    handle_city,
    handle_card_details,
    handle_products_ordered
}
    from '../store/checkout';

const useRedux = () => {

    //Cart Related functions and state    
    const cartItems = useSelector(state => state.entities.cart);
    const dispatch = useDispatch();

    //Checkout Data collection state
    const checkoutData = useSelector(state => state.entities.checkout);

    //To calculate the total bill on Cart
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const cartProductPrice = cartItems.map(product => product.quantity * product.price);
        const totalProductPrice = cartProductPrice.reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0).toFixed(2);
        setCartTotal(parseFloat(totalProductPrice));
    }, [cartItems]);

    //To store the products added on cart on the checkoutData slice so that the data can be stored in, after the order has taken place
    useEffect(() => {
        dispatch(handle_products_ordered({ products_ordered: cartItems }));
        console.log("Hello");
    }, [cartItems, dispatch]);

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

    //Checkout Data collection related functions

    const handleName = value => dispatch(handle_name({ name: value }));
    const handleAddressLine = value => dispatch(handle_address_line({ address_line: value }));
    const handleZipCode = value => dispatch(handle_zip_code({ zip_code: value }));
    const handleCity = value => dispatch(handle_city({ city: value }));
    const handleCardDetails = value => dispatch(handle_card_details({ card_details: value }));

    return {
        handleAddToCart,
        handleRemoveFromCart,
        handleAddQuantity,
        handleReduceQuantity,
        cartTotal,
        cartItems,
        checkoutData,
        handleName,
        handleAddressLine,
        handleZipCode,
        handleCity,
        handleCardDetails
    };
};

export default useRedux;