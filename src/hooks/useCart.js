import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cart';

const useCart = () => {

    const cartItems = useSelector(state => state.entities.cart);
    const dispatch = useDispatch();

    console.log(cartItems);

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

    return {
        handleAddToCart,
        handleRemoveFromCart,
        cartItems
    };
};

export default useCart;