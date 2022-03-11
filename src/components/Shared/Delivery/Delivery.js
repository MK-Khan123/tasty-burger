import React from 'react';
import './Delivery.css';
import deliveryBackground from '../../../images/delivery-banner.jpg';

const Delivery = () => {
    return (
        <section id='delivery' className='container' style={{ backgroundImage: `url(${deliveryBackground})` }}>
            <div style={{height: '100%'}} className='d-flex flex-column justify-content-center align-items-center p-5'>
                <h4>WE GUARANTEE</h4>
                <h5 className='fw-bold'>30 MINUTES DELIVERY!</h5>
                <p className='text-center text-muted fs-5'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius luctus neque magna</p>
                <div className="btn btn-outline-danger btn-lg">CALL: 789-654-3210</div>
            </div>
        </section>
    );
};

export default Delivery;