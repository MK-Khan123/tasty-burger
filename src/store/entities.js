import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart';
import checkoutReducer from './checkout';

export default combineReducers({
    cart: cartReducer,
    checkout: checkoutReducer
});