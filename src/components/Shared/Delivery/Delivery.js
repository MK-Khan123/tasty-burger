import React from 'react';
import './Delivery.css';

const Delivery = () => {
    const deliveryBackground = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/delivery-banner_dssklb.jpg';

    return (
        <section id='delivery' className='container' style={{ backgroundImage: `url(${deliveryBackground})` }}>
            <div style={{ height: '100%' }} className='d-flex flex-column justify-content-center align-items-center p-5'>
                <h4>WE GUARANTEE</h4>
                <h5 className='fw-bold'>30 MINUTES DELIVERY!</h5>
                <p className='text-center text-muted fs-5'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius luctus neque magna</p>
                <div style={{ fontFamily: 'Roboto, sans-serif' }} className="btn btn-outline-danger btn-lg">CALL: 789-654-3210</div>
            </div>
        </section>
    );
};

export default Delivery;