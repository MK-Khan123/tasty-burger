import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './AboutTesto.css';
import Footer from '../../Shared/Footer/Footer';
import Subscription from '../../Shared/Subscription/Subscription';

const AboutTesto = () => {

    const images = {
        banner: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786130/testo-burger-project/about-testo/about-page_m8n0cp.jpg`,
        intro: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-01-img_gvpwo7.png`,
        about: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-testo/about-1_bv8egs.jpg`,
        frenchFry: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786130/testo-burger-project/about-testo/img-10_ehwptm.jpg`,
        burger: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/about-testo/img-15_vlhqcu.jpg`
    };

    const icons = {
        burger: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/icons/burger_qgfla1.png`,
        fries: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/french-fries_qourda.png`,
        chicken: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/chicken-leg_otuxya.png`,
        salad: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/salad_svw3qy.png`,
        dessert: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/dessert_fh3ber.png`,
        drink: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/cocktail_gfphhd.png`
    };

    return (
        <section id='aboutTesto'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='about-background-banner' className="container-fluid" style={{ backgroundImage: `url(${images.banner})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>ABOUT TESTO</h5>
            </section>

            <main id='about-background-intro' className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src={images.intro} alt="" />
                    </div>
                    <div className="col-md-6 introFont mt-5 p-5">
                        <h5>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h5>
                        <p className='pt-3'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae.</p>
                        <ul className="row mt-5">
                            <li className="col-sm-6 col-12 introIcon-font">Fringilla risus, luctus mau.</li>
                            <li className="col-sm-6 col-12 introIcon-font">Quaerat sodales sapien</li>
                            <li className="col-sm-6 col-12 introIcon-font">Quaerat sodales sapilti.</li>
                            <li className="col-sm-6 col-12 introIcon-font">Nemo ipsam egestas</li>
                        </ul>
                        <div style={{ fontFamily: 'Oswald, sans-serif' }} className='mt-5'>
                            <button className='btn btn-lg btn-danger'>ABOUT MORE</button>
                        </div>
                    </div>
                </div>
            </main>

            <section id='about-background-promo' className='container-fluid' style={{ backgroundImage: `url(${images.about})` }}>
                <div style={{ height: '100%' }} className='d-flex flex-column justify-content-center p-5'>
                    <h5 className='text-center fw-bold'><span className='text-warning'>BURGERS...</span>WHAT ELSE?</h5>
                    <p className='text-center'>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus mollislorem primis in integer metus curae integer orci congue integer and primis in integer metus mollis</p>
                    <div style={{ padding: '0 15%' }} className="d-flex justify-content-evenly align-items-center">
                        <img className='food-icon-size m-3' src={icons.burger} alt="" />
                        <img className='food-icon-size m-3' src={icons.fries} alt="" />
                        <img className='food-icon-size m-3' src={icons.chicken} alt="" />
                        <img className='food-icon-size m-3' src={icons.salad} alt="" />
                        <img className='food-icon-size m-3' src={icons.dessert} alt="" />
                        <img className='food-icon-size m-3' src={icons.drink} alt="" />
                    </div>
                    <div className='text-center mt-3'>
                        <button style={{ maxWidth: '250px', fontFamily: 'Oswald, sans-serif' }} className='btn btn-lg btn-danger'>EXPLORE FULL MENU</button>
                    </div>
                </div>
            </section>

            <section id='about-background-promo2' className='container'>
                <div className="row gx-5 gy-4">
                    <div className="col-md-6">
                        <h5 className='fw-bold'>DISCOVER THE NEW TASTE OF THE BURGER</h5>
                        <p>Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus mollislorem primis</p>
                        <img className='rounded-3 img-fluid mt-4' src={images.frenchFry} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img className='rounded-3 img-fluid' src={images.burger} alt="" />
                        <p className='mt-3'>Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer.</p>
                    </div>
                </div>
            </section>

            <Subscription />
            <Footer />
        </section>
    );
};

export default AboutTesto;