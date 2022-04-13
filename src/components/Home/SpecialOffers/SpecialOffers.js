import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
    const images = {
        offer1: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/offer-1_ewswo3.jpg',
        offer2: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/offer-2_cs3kni.jpg',
        offer3: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/offer-3_n6zq43.jpg',
        offer4: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/offer-4_zydwtx.jpg'
    };

    return (
        <section id='special-offers' className='container'>
            <div className="row g-4">
                <div className="col-md-6">
                    <img className='img-fluid rounded-3' src={images.offer1} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid rounded-3' src={images.offer2} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid rounded-3' src={images.offer3} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid rounded-3' src={images.offer4} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;