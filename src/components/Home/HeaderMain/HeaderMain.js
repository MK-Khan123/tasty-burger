import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    const bannerImages = {
        slide1: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/slide-1_jjvtzy.jpg',
        slide2: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/slide-2_yzajpy.jpg',
        slide3: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/slide-3_krbgf9.jpg'
    };

    return (
        <header id="headerSlideShow" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#headerSlideShow" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#headerSlideShow" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#headerSlideShow" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bannerImages.slide1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carousel-fonts">
                        <h5>GOOD TIME, GREAT TASTE</h5>
                        <p>Open Daily: <span className='text-warning fw-bold'>11:30 AM - 8:30 PM</span></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bannerImages.slide2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carousel-fonts">
                        <h5>DISCOVER THE REAL BURGERS</h5>
                        <p>Enjoy the food you love <span className='text-warning fw-bold'>FROM $6.99</span></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bannerImages.slide3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carousel-fonts">
                        <h5>BIG BURGER, LITTLE MONEY</h5>
                        <p>Order Now: <span className='text-warning fw-bold'>789-654-3210</span></p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMain;