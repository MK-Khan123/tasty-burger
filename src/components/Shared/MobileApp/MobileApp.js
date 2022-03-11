import React from 'react';
import './MobileApp.css';
import eShopPic from '../../../images/mobile-app/e-shop.png';
import appStorePic from '../../../images/mobile-app/appstore.png';
import googlePlayPic from '../../../images/mobile-app/googleplay.png';

const MobileApp = () => {
    return (
        <section id='mobileApp'>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-md-6">
                        <h4>DOWNLOAD MOBILE APP AND</h4>
                        <h5 className='fw-bold'>SAVE UP TO 20%</h5>
                        <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius</p>
                        <div className="d-flex mt-4">
                            <div className='pe-2'>
                                <img style={{maxWidth: '150px'}} className='img-fluid' src={appStorePic} alt="" />
                            </div>
                            <div className='ps-2'>
                                <img style={{maxWidth: '150px'}} className='img-fluid' src={googlePlayPic} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={eShopPic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;