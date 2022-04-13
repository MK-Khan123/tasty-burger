import React from 'react';
import './MobileApp.css';

const MobileApp = () => {
    const images = {
        appStorePic: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/mobile-app/appstore_q0uml4.png',
        googlePlayPic: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/mobile-app/googleplay_wva2c8.png',
        eShopPic: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/mobile-app/e-shop_gagufy.png'
    };

    return (
        <section id='mobile-app'>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-md-6">
                        <h4>DOWNLOAD MOBILE APP AND</h4>
                        <h5 className='fw-bold'>SAVE UP TO 20%</h5>
                        <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius</p>
                        <div className="d-flex mt-4">
                            <div className='pe-2'>
                                <img style={{maxWidth: '150px'}} className='img-fluid' src={images.appStorePic} alt="" />
                            </div>
                            <div className='ps-2'>
                                <img style={{maxWidth: '150px'}} className='img-fluid' src={images.googlePlayPic} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={images.eShopPic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;