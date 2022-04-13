import React from 'react';
import './Intro.css';

const Intro = () => {
    // const adImage = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${introAd1})`,
    //     backgroundPosition: 'center'
    // };

    const introPic = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-01-img_gvpwo7.png';
    const introAd1 = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/introAd-1_uspstl.jpg';
    const introAd2 = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/introAd-2_ie6adw.jpg';


    const icons = {
        burger: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/icons/burger_qgfla1.png`,
        fries: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/french-fries_qourda.png`,
        chicken: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/chicken-leg_otuxya.png`,
        salad: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/salad_svw3qy.png`
    };

    return (
        <section id='intro' className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src={introPic} alt="" />
                </div>
                <div className="col-md-6 intro-font mt-5 p-5">
                    <h5>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h5>
                    <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum in assumenda, aut accusamus voluptates, totam doloribus debitis distinctio.</p>
                    <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='intro-icon-size' src={icons.burger} alt="" />
                            </div>
                            <p className='text-center intro-icon-font'>BURGERS</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='intro-icon-size' src={icons.fries} alt="" />
                            </div>
                            <p className='text-center intro-icon-font'>FRIES</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='intro-icon-size' src={icons.chicken} alt="" />
                            </div>
                            <p className='text-center intro-icon-font'>CHICKEN</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='intro-icon-size' src={icons.salad} alt="" />
                            </div>
                            <p className='text-center intro-icon-font'>SALADS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 justify-content-evenly">
                <div style={{ position: 'relative' }} className="p-2 col-md-5">
                    <img className='rounded img-fluid' src={introAd1} alt="" />
                    <div className='carousel-caption text-end text-inside-image'>
                        <p>GET YOUR FREE</p>
                        <p className='fw-bold'>CHEESE FRIES</p>
                        <button className='btn btn-lg btn-outline-danger'>LEARN MORE</button>
                    </div>
                </div>
                <div style={{ position: 'relative' }} className="p-2 col-md-6">
                    <img className='rounded img-fluid' src={introAd2} alt="" />
                    <div className='carousel-caption text-end text-inside-image'>
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