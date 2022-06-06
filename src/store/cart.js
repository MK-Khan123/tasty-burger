import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (cart, action) => {
            cart.push(action.payload);
        },

        removeFromCart: (cart, action) => cart.filter(product => product._id !== action.payload._id),

        addQuantity: (cart, action) => {
            const product = cart.find(product => product._id === action.payload._id);
            product.quantity = product.quantity + 1;
        },

        reduceQuantity: (cart, action) => {
            const product = cart.find(pd => pd._id === action.payload._id);
            if (product.quantity === 1) {
                return cart.filter(pd => pd._id !== action.payload._id);
            } else {
                product.quantity = product.quantity - 1;
            }
        },

        emptyCart: (cart, action) => cart = []
    }
});

export const { addToCart, removeFromCart, addQuantity, reduceQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;