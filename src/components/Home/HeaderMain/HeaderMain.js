import React from 'react';
import './HeaderMain.css';
import slide1 from '../../../images/slide-1.jpg';
import slide2 from '../../../images/slide-2.jpg';
import slide3 from '../../../images/slide-3.jpg';

const HeaderMain = () => {
    return (
        <header id="headerSlideShow" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#headerSlideShow" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#headerSlideShow" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#headerSlideShow" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carouselFonts">
                        <h5>GOOD TIME, GREAT TASTE</h5>
                        <p>Open Daily: <span className='text-warning fw-bold'>11:30 AM - 8:30 PM</span></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carouselFonts">
                        <h5>DISCOVER THE REAL BURGERS</h5>
                        <p>Enjoy the food you love <span className='text-warning fw-bold'>FROM $6.99</span></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carouselFonts">
                        <h5>BIG BURGER, LITTLE MONEY</h5>
                        <p>Order Now: <span className='text-warning fw-bold'>789-654-3210</span></p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMain;