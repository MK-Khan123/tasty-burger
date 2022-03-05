import React from 'react';
import './Intro.css';
import introPic from '../../../images/about-01-img.png';
import burgerIcon from '../../../images/burger.png';
import friesIcon from '../../../images/french-fries.png';
import chickenIcon from '../../../images/chicken-leg.png';
import saladIcon from '../../../images/salad.png';
import introAd1 from '../../../images/introAd-1.jpg';
import introAd2 from '../../../images/introAd-2.jpg';

const Intro = () => {
    // const adImage = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${introAd1})`,
    //     backgroundPosition: 'center'
    // };

    return (
        <section id='intro' className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src={introPic} alt="" />
                </div>
                <div className="col-md-6 intro-font mt-5 p-5">
                    <h5>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h5>
                    <p className='text-secondary pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum in assumenda, aut accusamus voluptates, totam doloribus debitis distinctio.</p>
                    <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='introIcon-size' src={burgerIcon} alt="" />
                            </div>
                            <p className='text-center introIcon-font'>BURGERS</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='introIcon-size' src={friesIcon} alt="" />
                            </div>
                            <p className='text-center introIcon-font'>FRIES</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='introIcon-size' src={chickenIcon} alt="" />
                            </div>
                            <p className='text-center introIcon-font'>CHICKEN</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='introIcon-size' src={saladIcon} alt="" />
                            </div>
                            <p className='text-center introIcon-font'>SALADS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 justify-content-evenly">
                <div style={{ position: 'relative' }} className="p-2 col-md-5">
                    <img className='rounded img-fluid' src={introAd1} alt="" />
                    <div className='carousel-caption text-end textInsideImage'>
                        <p>GET YOUR FREE</p>
                        <p className='fw-bold'>CHEESE FRIES</p>
                        <button className='btn btn-lg btn-outline-danger'>LEARN MORE</button>
                    </div>
                </div>
                <div style={{ position: 'relative' }} className="p-2 col-md-6">
                    <img className='rounded img-fluid' src={introAd2} alt="" />
                    <div className='carousel-caption text-end textInsideImage'>
                        <p>CRISPY CHICKEN</p>
                        <p className='fw-bold'>BURGER IS BACK</p>
                        <button className='btn btn-lg btn-outline-danger'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;