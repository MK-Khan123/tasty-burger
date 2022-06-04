import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: [{
        name: '',
        email: '',
        address: {
            address_line: '',
            zip_code: '',
            city: ''
        },
        card_details: {
            name_on_card: '',
            card_brand: '',
            card_number: '',
            card_expiration: ''
        },
        products_ordered: [],
        total_paid: ''
    }],
    reducers: {
        addName: (checkout, action) => {
            checkout.name = action.payload.name;
        },

        addEmail: (checkout, action) => {
            checkout.email = action.payload.email;
        },

        addAddress: (checkout, action) => {
            checkout.address = action.payload.address;
        },


    }
});



export const { addName, addEmail, addAddress } = checkoutSlice.actions;
export default checkoutSlice.reducer;