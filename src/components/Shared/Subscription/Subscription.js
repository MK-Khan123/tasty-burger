import React from 'react';
import './Subscription.css';

const Subscription = () => {
    return (
        <section id='subscription' className='container p-5'>
            <h5 className='fw-bold text-center'>SUBSCRIBE TO NEWSLETTER</h5>
            <p className='text-center text-muted'>Subscribe to the weekly newsletter for all the latest updates</p>
            <div style={{ fontFamily: 'Roboto, sans-serif' }} className="d-flex flex-column justify-content-evenly">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp1" />
                    <div id="emailHelp1" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div style={{ fontFamily: 'Oswald, sans-serif' }}>
                    <button className='btn btn-danger mb-2'>SIGN UP</button>
                </div>
            </div>
        </section>
    );
};

export default Subscription;