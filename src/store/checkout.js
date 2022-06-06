import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
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
        total_paid: '',
        order_status: 'pending'
    },
    reducers: {
        handle_name: (checkout, action) => {
            checkout.name = action.payload.name;
        },

        handle_email: (checkout, action) => {
            checkout.email = action.payload.email;
        },

        handle_address_line: (checkout, action) => {
            checkout.address.address_line = action.payload.address_line;
        },

        handle_zip_code: (checkout, action) => {
            checkout.address.zip_code = action.payload.zip_code;
        },

        handle_city: (checkout, action) => {
            checkout.address.city = action.payload.city;
        },

        handle_card_details: (checkout, action) => {
            checkout.card_details = action.payload.card_details;
        },

        handle_products_ordered: (checkout, action) => {
            checkout.products_ordered = action.payload.products_ordered;
        },

        handle_total_paid: (checkout, action) => {
            checkout.total_paid = action.payload.total_paid;
        },

        empty_checkout_state: (checkout, action) => checkout = {
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
            total_paid: '',
            order_status: 'pending'
        }
    }
});


export const
    {
        handle_name,
        handle_email,
        handle_address_line,
        handle_zip_code,
        handle_city,
        handle_card_details,
        handle_products_ordered,
        handle_total_paid,
        empty_checkout_state
    } = checkoutSlice.actions;

export default checkoutSlice.reducer;