import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (cart, action) => {
            cart.push(action.payload);
        },

        removeFromCart: (cart, action) => {
            const updatedCart = cart.filter(product => product._id !== action.payload._id);
            cart = updatedCart;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;