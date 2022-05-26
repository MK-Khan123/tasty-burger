import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, addQuantity, reduceQuantity } from '../store/cart';

const useCart = () => {

    const cartItems = useSelector(state => state.entities.cart);
    const dispatch = useDispatch();
    
    //To calculate the total bill on Cart
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const cartProductPrice = cartItems.map(product => product.quantity * product.price);
        const totalProductPrice = cartProductPrice.reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0).toFixed(2);
        setCartTotal(parseFloat(totalProductPrice));
    }, [cartItems]);


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

    return {
        handleAddToCart,
        handleRemoveFromCart,
        handleAddQuantity,
        handleReduceQuantity,
        cartTotal,
        cartItems
    };
};

export default useCart;