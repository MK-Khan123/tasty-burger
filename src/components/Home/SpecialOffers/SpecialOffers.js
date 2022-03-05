import React from 'react';
import './SpecialOffers.css';
import offer1 from '../../../images/offer-1.jpg';
import offer2 from '../../../images/offer-2.jpg';
import offer3 from '../../../images/offer-3.jpg';
import offer4 from '../../../images/offer-4.jpg';

const SpecialOffers = () => {
    return (
        <section id='specialOffers' className='container'>
            <div className="row g-4">
                <div className="col-md-6">
                    <img className='img-fluid rounded-3' src={offer1} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid rounded-3' src={offer2} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid rounded-3' src={offer3} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid rounded-3' src={offer4} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;