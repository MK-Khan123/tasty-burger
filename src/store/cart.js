import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (cart, action) => {
            cart.push(action.payload);
        },

        removeFromCart: (cart, action) => cart.filter(product => product._id !== action.payload._id)
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;