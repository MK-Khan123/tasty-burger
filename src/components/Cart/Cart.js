import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Cart.css';
import cartBanner from '../../images/cart/cart-page.jpg';

const Cart = () => {
    return (
        <section id='cart'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='cart-banner' className="container-fluid" style={{ backgroundImage: `url(${cartBanner})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>SHOPPING CART</h5>
            </section>

            
        </section>
    );
};

export default Cart;